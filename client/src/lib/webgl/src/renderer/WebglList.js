import {GlslVar} from "../shaderLib/glsl_chunk";
import MaterialConst from "../material/MaterialConst";
import WebglContextConst from "../../libs/webgl/WebglContextConst";

export default class WebglList {
    static create(webglState,
                  webglCamera,
                  webglLights,
                  webglNode) {

        let webglList = new WebglList();
        let uniformChunk = webglNode.uniformChunk;
        let attributeChunk = webglNode.attributeChunk;

        webglList.webglState = webglState;
        webglList.webglCamera = webglCamera;
        webglList.webglLights = webglLights;
        webglList.webglNode = webglNode;

        webglList.ambientLightNum = webglLights.ambientLightNum;
        webglList.directionalLightNum = webglLights.directionalLightNum;
        webglList.pointLightNum = webglLights.pointLightNum;
        webglList.spotLightNum = webglLights.spotLightNum;

        webglList.uniforms = Object.assign(
            {},
            webglCamera.uniformChunk.uniforms,
            webglLights.uniformChunk.uniforms,
            uniformChunk.uniforms
        );
        webglList.attributes = attributeChunk.attributes;
        webglList.indices = attributeChunk.indices;
        webglList.vertexLength = attributeChunk.vertexLength;
        webglList.materialType = webglNode.materialType;
        webglList.attributesId = attributeChunk.id;
        webglList.needsUpdateAttributes = attributeChunk.needsUpdate;

        webglList.useDiffMap = Boolean(webglList.uniforms[GlslVar.DIFFUSE_MAP]);
        webglList.useSpecularMap = Boolean(webglList.uniforms[GlslVar.SPECULAR_MAP]);

        return webglList;
    }

    constructor() {
        //data
        this.webglState = null;
        this.webglCamera = null;
        this.webglLights = null;
        this.webglNode = null;
        //define
        this.materialType = "";
        this.useDiffMap = false;
        this.useSpecularMap = false;
        this.useShadowMap = false;
        this.ambientLightNum = 0;
        this.directionalLightNum = 0;
        this.pointLightNum = 0;
        this.spotLightNum = 0;
        //vertex
        this.uniforms = {};
        this.attributes = {};
        this.indices = {};
        this.attributesId = null;
        this.vertexLength = 0;
        //caps
        this.cullFaceType = WebglContextConst.BACK;

    }

    get needsUpdateAttributes() {
        return this.webglNode.attributeChunk.needsUpdate;
    }

    set needsUpdateAttributes(boolean) {
        this.webglNode.attributeChunk.needsUpdate = boolean;
    }

    getGlslData() {
        return this;
    }

    getProgramId() {
        return this.materialType +
            this.useDiffMap +
            this.useSpecularMap +
            this.ambientLightNum +
            this.directionalLightNum +
            this.pointLightNum +
            this.spotLightNum;
    }

    replaceUniform(uniforms) {
        Object.assign(this.uniforms, uniforms);
    }

    clone() {
        let result = new WebglList();
        //data
        result.webglState = this.webglState;
        result.webglCamera = this.webglCamera;
        result.webglLights = this.webglLights;
        result.webglNode = this.webglNode;
        //define
        result.materialType = this.materialType;
        result.useDiffMap = this.useDiffMap;
        result.useSpecularMap = this.useSpecularMap;
        result.useShadowMap = this.useShadowMap;
        result.ambientLightNum = this.ambientLightNum;
        result.directionalLightNum = this.directionalLightNum;
        result.pointLightNum = this.pointLightNum;
        result.spotLightNum = this.spotLightNum;
        //vertex
        result.uniforms = Object.assign({}, this.uniforms);
        result.attributes = this.attributes;
        result.indices = this.indices;
        result.attributesId = this.attributesId;
        result.vertexLength = this.vertexLength;
        //cap
        result.cullFaceType = this.cullFaceType;
        return result;
    }

    convertToShadowList(viewUniform) {
        this.useDiffMap = false;
        this.useSpecularMap = false;
        this.useShadowMap = false;
        this.ambientLightNum = 0;
        this.directionalLightNum = 0;
        this.pointLightNum = 0;
        this.spotLightNum = 0;
        this.materialType = MaterialConst.DEPTH;
        this.cullFaceType = WebglContextConst.FRONT;
        this.replaceUniform(viewUniform);
    }
}
