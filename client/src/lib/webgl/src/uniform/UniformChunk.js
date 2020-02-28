import UniformsCreator from "./UniformsCreator";

export default class UniformChunk {
    static create() {
        return new UniformChunk();
    }

    constructor() {
        this.uniforms = {};
    }

    fromLights(ambientLights = [], directionalLights = [], pointLights = [], spotLights = []) {
        this.uniforms = UniformsCreator.createByLights(ambientLights, directionalLights, pointLights, spotLights);
        return this;
    }

    fromNode(node) {
        this.uniforms = UniformsCreator.createByNode(node);
        return this;
    }

    fromCameraNode(cameraNode) {
        this.uniforms = UniformsCreator.createByCameraNode(cameraNode);
        return this;
    }

    merge(uniformChunk) {

    }

    clone() {
        let uniformChunk = UniformChunk.create();
        Object.assign(uniformChunk.uniforms, this.uniforms);
        return uniformChunk;
    }
}

