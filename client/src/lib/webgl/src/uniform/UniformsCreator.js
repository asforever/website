import UniformCreator from "./UniformCreator";
import {GlslVar} from "../const/GlobalConst";
import DirectionalLightNode from "../node/DirectionalLightNode";

export default class UniformsCreator {

    static createByNode(node) {
        let uniforms = this.createByMaterial(node.material);
        if (node.isTransform) {
            node.updateMatrix();
            node.isTransform = false;
        }
        uniforms[GlslVar.MODEL] = UniformCreator.createByMat4(GlslVar.MODEL, node.matrix);
        uniforms[GlslVar.NORMAL_MATRIX] = UniformCreator.createByMat3(GlslVar.NORMAL_MATRIX, node.normalMatrix);
        return uniforms;
    }

    static createProjViewMat4ByLight(light) {

        let uniforms = {};
        if (light.isTransform) {
            light.updateMatrix();
            light.isTransform = false;
        }
        uniforms[GlslVar.PROJECTION] = UniformCreator.createByMat4(GlslVar.PROJECTION, DirectionalLightNode.orthoMatrix);
        uniforms[GlslVar.VIEW] = UniformCreator.createByMat4(GlslVar.VIEW, light.matrix);
        return uniforms;
    }

    static createByCameraNode(cameraNode) {
        let uniforms = {};
        if (cameraNode.isTransform) {
            cameraNode.updateMatrix();
            cameraNode.isTransform = false;
        }

        uniforms[GlslVar.VIEW] = UniformCreator.createByMat4(GlslVar.VIEW, cameraNode.matrix);
        uniforms[GlslVar.PROJECTION] = UniformCreator.createByMat4(GlslVar.PROJECTION, cameraNode.camera.projection);
        uniforms[GlslVar.EYE] = UniformCreator.createByVec3(GlslVar.EYE, cameraNode.worldTranslation.getXYZ());
        return uniforms;
    }

    static createByLights(ambientLights = [], directionalLights = [], pointLights = [], spotLights = []) {
        let uniforms = {};
        //ambient light
        ambientLights.forEach((ambientNode, key) => {
            const lightKey = `ambientLights[${key}]`;
            let diffuseKey = `${lightKey}.diffuse`;
            let intensityKey = `${lightKey}.intensity`;
            uniforms[diffuseKey] = UniformCreator.createByVec4(diffuseKey, ambientNode.diffuse.get());
            uniforms[intensityKey] = UniformCreator.createByFloat(intensityKey, ambientNode.intensity);
        });
        //direction light
        directionalLights.forEach((directionalNode, key) => {
            if (directionalNode.isTransform) {
                directionalNode.updateMatrix();
                directionalNode.isTransform = false;
            }

            const lightKey = `directionalLights[${key}]`;
            let diffuseKey = `${lightKey}.diffuse`;
            let specularKey = `${lightKey}.specular`;
            let dirKey = `${lightKey}.dir`;
            let intensityKey = `${lightKey}.intensity`;

            uniforms[diffuseKey] = UniformCreator.createByVec4(diffuseKey, directionalNode.diffuse.get());
            uniforms[specularKey] = UniformCreator.createByVec4(specularKey, directionalNode.specular.get());
            uniforms[dirKey] = UniformCreator.createByVec3(dirKey, directionalNode.getDirection().getXYZ());
            uniforms[intensityKey] = UniformCreator.createByFloat(intensityKey, directionalNode.intensity);
            if (directionalNode.castShadow) {
                uniforms[GlslVar.DIRECTIONAL_SHADOW_MAP] = UniformCreator.createByTexture(GlslVar.DIRECTIONAL_SHADOW_MAP, directionalNode.shadowRenderTarget.texture);
                uniforms[GlslVar.DIRECTIONAL_LIGHT_PROJ_VIEW] = UniformCreator.createByMat4(GlslVar.DIRECTIONAL_LIGHT_PROJ_VIEW, directionalNode.projViewMatrix);
            }
        });
        //point light
        pointLights.forEach((pointNode, key) => {
            const lightKey = `pointLights[${key}]`;
            let diffuseKey = `${lightKey}.diffuse`;
            let specularKey = `${lightKey}.specular`;
            let positionKey = `${lightKey}.position`;
            let constantKey = `${lightKey}.constant`;
            let linearKey = `${lightKey}.linear`;
            let quadraticKey = `${lightKey}.quadratic`;
            let intensityKey = `${lightKey}.intensity`;

            uniforms[diffuseKey] = UniformCreator.createByVec4(diffuseKey, pointNode.diffuse.get());
            uniforms[specularKey] = UniformCreator.createByVec4(specularKey, pointNode.specular.get());
            uniforms[positionKey] = UniformCreator.createByVec3(positionKey, pointNode.translation.getXYZ());
            uniforms[constantKey] = UniformCreator.createByFloat(constantKey, pointNode.constant);
            uniforms[linearKey] = UniformCreator.createByFloat(linearKey, pointNode.linear);
            uniforms[quadraticKey] = UniformCreator.createByFloat(quadraticKey, pointNode.quadratic);
            uniforms[intensityKey] = UniformCreator.createByFloat(intensityKey, pointNode.intensity);
            if (pointNode.castShadow) {
                uniforms[GlslVar.POINT_SHADOW_MAP] = UniformCreator
                    .createByFloat(GlslVar.POINT_SHADOW_MAP, pointNode.shadowRenderTarget.texture);
            }

        });
        //spot light
        spotLights.forEach((spotNode, key) => {
            const lightKey = `spotLights[${key}]`;
            let diffuseKey = `${lightKey}.diffuse`;
            let specularKey = `${lightKey}.specular`;
            let positionKey = `${lightKey}.position`;
            let dirKey = `${lightKey}.dir`;
            let cutOffKey = `${lightKey}.cutOff`;
            let outerCutOffKey = `${lightKey}.outerCutOff`;
            let constantKey = `${lightKey}.constant`;
            let linearKey = `${lightKey}.linear`;
            let quadraticKey = `${lightKey}.quadratic`;
            let intensityKey = `${lightKey}.intensity`;

            uniforms[diffuseKey] = UniformCreator.createByVec4(diffuseKey, spotNode.diffuse.get());
            uniforms[specularKey] = UniformCreator.createByVec4(specularKey, spotNode.specular.get());
            uniforms[positionKey] = UniformCreator.createByVec3(positionKey, spotNode.translation.getXYZ());
            uniforms[dirKey] = UniformCreator.createByVec3(dirKey, spotNode.dir);
            uniforms[cutOffKey] = UniformCreator.createByFloat(cutOffKey, spotNode.cutOff);
            uniforms[outerCutOffKey] = UniformCreator.createByFloat(outerCutOffKey, spotNode.outerCutOff);
            uniforms[constantKey] = UniformCreator.createByFloat(constantKey, spotNode.constant);
            uniforms[linearKey] = UniformCreator.createByFloat(linearKey, spotNode.linear);
            uniforms[quadraticKey] = UniformCreator.createByFloat(quadraticKey, spotNode.quadratic);
            uniforms[intensityKey] = UniformCreator.createByFloat(intensityKey, spotNode.intensity);
        });
        return uniforms;
    }

    //private
    static createByMaterial(material) {
        const uniforms = {};
        uniforms[GlslVar.DIFFUSE] = UniformCreator.createByVec4(GlslVar.DIFFUSE, material.diffuse.get());
        uniforms[GlslVar.SPECULAR] = UniformCreator.createByVec4(GlslVar.SPECULAR, material.specular.get());
        if (material.diffuseMap) uniforms[GlslVar.DIFFUSE_MAP] = UniformCreator.createByTexture(GlslVar.DIFFUSE_MAP, material.diffuseMap);
        if (material.specularMap) uniforms[GlslVar.SPECULAR_MAP] = UniformCreator.createByTexture(GlslVar.SPECULAR_MAP, material.specularMap);
        if (material.shininess) uniforms[GlslVar.SHININESS] = UniformCreator.createByFloat(GlslVar.SHININESS, material.shininess);
        return uniforms;
    }

    static createShadowMap(light) {
        UniformCreator.createByTexture(GlslVar.SPECULAR_MAP, light.specularMap);
    }
}
