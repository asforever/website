import Node from "../node/Node"
import Camera from "../camera/Camera";

export default class Scene {
    //static
    static create() {
        const scene = new Scene();
        const rootNode = new Node();
        scene._rootNode = rootNode;
        scene.nodes[rootNode.id] = rootNode;
        return scene;
    };

    //attribute
    constructor() {
        this.cameras = {};
        this.nodes = {};
        this.pointLights = {};

        this.cameras = {};
        this._rootNode = null;
    }

    //method
    getRootNode() {
        return this._rootNode;
    }

}
