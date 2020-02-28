import Node from "./Node";
import UniformCreator from "../uniform/UniformCreator";
import NodeConst from "./NodeConst";
import {Camera} from "../index";

export default class CameraNode extends Node {
    static create() {
        return new CameraNode();
    }

    constructor() {
        super();
        this.type = NodeConst.CAMERA_NODE;
        this.camera = Camera.create();
        this.visible = false;
    }

    perspective(fov, aspect, near, far) {
        this.camera.perspective(fov, aspect, near, far)
    }


}
