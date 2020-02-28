import UniformsCreator from "../uniform/UniformsCreator";
import UniformChunk from "../uniform/UniformChunk";

export default class WebglCamera {

    static create(cameraNode) {
        let webglCamera = new WebglCamera();
        webglCamera.uniformChunk = UniformChunk.create().fromCameraNode(cameraNode);
        return webglCamera;
    }


    constructor() {
        this.uniformChunk = null;
    }
}