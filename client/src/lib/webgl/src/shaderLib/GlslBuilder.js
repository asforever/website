import {ShaderSource, MaterialTypes} from "./glsl_chunk";

export default class GlslBuilder {
    constructor() {
        this.vs = "";
        this.fs = "";

        this.materialType = null;
        this.useMap = false;
        this.useShadowMap = false;
        this.useDiffMap = false;
        this.useSpecularMap = false;
        this.ambientLightNum = 0;
        this.directionalLightNum = 0;
        this.pointLightNum = 0;
        this.spotLightNum = 0;
    }

    loadData(data) {
        this.materialType = data.materialType;
        this.ambientLightNum = data.ambientLightNum || 0;
        this.directionalLightNum = data.directionalLightNum || 0;
        this.pointLightNum = data.pointLightNum || 0;
        this.spotLightNum = data.spotLightNum || 0;
        this.useDiffMap = data.useDiffMap;
        this.useSpecularMap = data.useSpecularMap;
        this.useShadowMap = data.useShadowMap;
        this.useMap = this.useDiffMap || this.useSpecularMap;
    }

    configDefine() {
        const {
            useMap, useDiffMap, useSpecularMap,
            ambientLightNum, directionalLightNum, pointLightNum, spotLightNum,
            materialType,
        } = this;
        const useLight = ambientLightNum + directionalLightNum + pointLightNum + spotLightNum;

        let vs = "#version 300 es\n";
        let fs = "#version 300 es\n precision  highp float;\n";

        if (this.materialType !== MaterialTypes.DEPTH) {
            vs += `#define DIRECTIONAL_LIGHT_SHADOW \n`;
            fs += `#define DIRECTIONAL_LIGHT_SHADOW \n`;

            if (useMap) {
                vs += `#define USE_MAP \n`;
                fs += `#define USE_MAP \n`;
            }

            if (useDiffMap) {
                fs += `#define USE_DIFF_MAP \n`;
            }

            if (useSpecularMap) {
                fs += `#define USE_SPECULAR_MAP \n`;
            }

            if (useLight) {
                vs += `#define USE_LIGHT \n`;
                fs += `#define USE_LIGHT \n`;
            }

            if (ambientLightNum) {
                fs += `#define AMBIENT_LIGHT_NUM ${ambientLightNum} \n`;
            }

            if (directionalLightNum) {
                fs += `#define DIRECTIONAL_LIGHT_NUM ${directionalLightNum} \n`;
            }
            if (pointLightNum) {
                fs += `#define POINT_LIGHT_NUM ${pointLightNum} \n`;
            }
            if (spotLightNum) {
                fs += `#define SPOT_LIGHT_NUM ${spotLightNum} \n`;
            }
        }

        this.vs = vs;
        this.fs = fs;
    }

    configMaterial() {
        this.vs += ShaderSource[this.materialType].vertexShader;
        this.fs += ShaderSource[this.materialType].fragmentShader;
    }

    get() {
        this.configDefine();
        this.configMaterial();
        return this;
    }
}