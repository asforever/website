import Webgl2State from "../../libs/webgl/Webgl2State";
import {NodeConst} from "../const/GlobalConst";
import WebglCamera from "./WebglCamera";
import WebglLights from "./WebglLights";
import WebglNodes from "./WebglNodes";
import WebglLists from "./WebglLists";
import WebglDrawer from "./WebglDrawer";

export default class Renderer {

    static create(canvas, option) {
        const render = new Renderer(canvas, option);
        render.resize();
        return render
    }

    constructor(canvas, option) {
        this.canvas = canvas || document.createElement("canvas");
        this.state = Webgl2State.create(this.canvas, option);
        this.drawer = WebglDrawer.create(this.state);
        this.width = this.canvas.width = option.width || this.canvas.clientWidth;
        this.height = this.canvas.height = option.height || this.canvas.clientHeight;

        this.directionalLights = [];
        this.pointLights = [];
        this.webglCamera = null;
        this.webglLights = null;
        this.webglNodes = null;
        this.webglLists = null;

    }

    sortObjects(scene) {
        const rootNode = scene.getRootNode(),
            sortObjects = {};

        rootNode.traverse(node => {
            if (!sortObjects[node.type]) sortObjects[node.type] = [];
            sortObjects[node.type].push(node);
        });
        let cameras = sortObjects[NodeConst.CAMERA_NODE];

        let ambientLights = sortObjects[NodeConst.AMBIENT_LIGHT_NODE];
        let directionalLights = sortObjects[NodeConst.DIRECTIONAL_LIGHT_NODE] || [];
        let pointLights = sortObjects[NodeConst.POINT_LIGHT_NODE];
        let spotLights = sortObjects[NodeConst.SPOT_LIGHT_NODE];
        let nodes = sortObjects[NodeConst.NODE];

        this.webglCamera = WebglCamera.create(cameras[0]);
        this.webglLights = WebglLights.create(ambientLights, directionalLights, pointLights, spotLights);
        this.webglNodes = WebglNodes.create(nodes);

        this.directionalLights = directionalLights;
        this.pointLights = pointLights;

        this.webglLists = WebglLists.create(
            this.state,
            this.webglCamera,
            this.webglLights,
            this.webglNodes,
        );

    }

    renderShadow() {
        let {directionalLights, webglLists, drawer} = this;
        let webglShadowLists = webglLists.clone();

        directionalLights.forEach(directionalLight => {
            if (!directionalLight.castShadow) return;
            let shadowRenderTarget = directionalLight.shadowRenderTarget;
            let texture = shadowRenderTarget.texture;
            let {width, height} = texture;
            webglShadowLists.convertToShadowList(directionalLight);

            drawer.useRenderTarget(shadowRenderTarget);
            drawer.viewport(0, 0, width, height);
            webglShadowLists.get().forEach(webglShadowList => {
                drawer.useWebglList(webglShadowList);
                drawer.draw();
            });
            drawer.useRenderTarget();

        });

    }

    renderWebglLists() {
        const drawer = this.drawer;
        drawer.viewport(0, 0, this.width, this.height);
        this.webglLists.get().forEach(renderList => {
            drawer.useWebglList(renderList);
            drawer.draw();
        });
    }

    render(scene) {
        this.sortObjects(scene);
        this.renderShadow();
        this.renderWebglLists();
    }


    animate(callback) {
        callback();
        requestAnimationFrame(this.animate.bind(this, callback));
    }

    resize() {
        this.width = this.canvas.width = this.canvas.clientWidth;
        this.height = this.canvas.height = this.canvas.clientHeight;
        this.state.viewport(0, 0, this.width, this.height);
    }

    dispose() {
        this.state.disposeContext();
    }
}
