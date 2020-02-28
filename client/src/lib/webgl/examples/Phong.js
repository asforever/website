import {
    Renderer,
    Scene,
    PlaneMesh,
    BoxMesh,
    Node,
    CameraNode,
    OrbitControl,

    Translation,
    Rotation,
    Texture2D,
    BaseMaterial,
    PhongMaterial,
    AmbientLightNode,
    DirectionalLightNode,
    PointLightNode,
    SpotLightNode,
    Matrix4,
} from "../src";

import diffImageSrc from "../assets/images/container2.png";
import specImageSrc from "../assets/images/container2_specular.png";
import Base from "./Base";

export default class Phong extends Base {

    static create(canvas) {
        let example = new Phong(canvas);
        example.initScene();
        example.initEvent();
        return example;
    }

    constructor(canvas) {
        super(canvas);
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.groundPiles = [];

        this.for = Math.PI / 3;
    }

    initScene() {
        let canvas = this.canvas;
        const renderer = this.renderer = Renderer.create(canvas, {antialias: true});
        const scene = this.scene = Scene.create();
        const cameraNode = this.camera = CameraNode.create();

        //
        const rootNode = scene.getRootNode();
        //camera
        cameraNode.perspective();
        cameraNode.translation.set(10, 10, 10);
        cameraNode.lookAt(Translation.create());
        rootNode.addChild(cameraNode);
        //orbitControl
        OrbitControl.create(cameraNode, canvas);
        //light
        const pointLightNode = PointLightNode.create(scene);
        pointLightNode.translation.set(0, 1, 3);

        const directionalLightNode = DirectionalLightNode.create(scene);
        directionalLightNode.translation.set(6, 6, 6);
        directionalLightNode.lookAt(Translation.create());
        directionalLightNode.castShadow = true;

        const ambientLightNode = AmbientLightNode.create(scene);
        rootNode.addChild(ambientLightNode, directionalLightNode, pointLightNode);
        //objects
        let diffTexture = Texture2D.create();
        let specularTexture = Texture2D.create();

        let floorMat = PhongMaterial.create({});
        floorMat.diffuse.set(0.5, 0.5, 0.5);
        let floorPlane = PlaneMesh.create(30, 30);
        const floorNode = Node.create(scene);
        floorNode.mesh = floorPlane;
        floorNode.setMaterial(floorMat);
        rootNode.addChild(floorNode);

        let boxMat = PhongMaterial.create({
            diffuseMap: diffTexture,
            specularMap: specularTexture,
        });

        let diffImage = new Image();
        diffImage.onload = () => {
            diffTexture.image = diffImage;
            diffTexture.width = diffImage.width;
            diffTexture.height = diffImage.height;
            diffTexture.needsUpdate = true;
        };
        diffImage.src = diffImageSrc;

        let specularImage = new Image();
        specularImage.onload = () => {
            specularTexture.image = specularImage;
            specularTexture.width = specularImage.width;
            specularTexture.height = specularImage.height;
            specularTexture.needsUpdate = true;
        };
        specularImage.src = specImageSrc;

        let boxSize = 2;
        let boxNum = 6;
        let boxDis = 3;
        let boxMesh = BoxMesh.create(boxSize, boxSize, boxSize);
        for (let i = 0; i < boxNum; i++) {
            let isD = Math.floor(8 % i);

            const node = Node.create(scene);
            node.mesh = boxMesh;
            node.setMaterial(isD ? boxMat : floorMat);
            node.quaternion.fromEuler(Rotation.create(
                Math.random() * 360,
                Math.random() * 360,
                Math.random() * 360));

            node.translation.set(
                (Math.random() - 0.5) * 10,
                boxSize + Math.random() * 3,
                (Math.random() - 0.5) * 10);
            rootNode.addChild(node);
            this.groundPiles.push(node);
        }
        //renderer
        renderer.render(scene);

    }

    initEvent() {
        const renderer = this.renderer;

        window.addEventListener("resize", () => {
            const cameraNode = this.camera;
            const camera = cameraNode.camera;

            renderer.resize();
            let width = renderer.canvas.clientWidth;
            let height = renderer.canvas.clientHeight;
            cameraNode.perspective(camera.fov, width / height);
        }, false);

        window.dispatchEvent(new Event("resize"));

        renderer.animate(() => {
            renderer.render(this.scene);
        });
    }


    dispose() {

    }
}
