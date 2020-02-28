import UniformChunk from "../uniform/UniformChunk";

export default class WebglLights {

    static create(ambientLights = [], directionalLights = [], pointLights = [], spotLights = []) {
        let webglLights = new WebglLights();
        webglLights.uniformChunk = UniformChunk.create().fromLights(ambientLights, directionalLights, pointLights, spotLights);
        webglLights.ambientLightNum = ambientLights.length;
        webglLights.directionalLightNum = directionalLights.length;
        webglLights.pointLightNum = pointLights.length;
        webglLights.spotLightNum = spotLights.length;
        return webglLights;
    }

    constructor() {
        this.uniformChunk = null;
        this.ambientLightNum = 0;
        this.directionalLightNum = 0;
        this.pointLightNum = 0;
        this.spotLightNum = 0;
    }
}