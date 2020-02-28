import Uniform from "./Uniform";
import {GlslConst} from "../const/GlobalConst";

export default class UniformCreator {

    static createByMat3(name, mat3 = 1) {
        return new Uniform(name, mat3.elements, GlslConst.MAT3);
    }

    static createByMat4(name, mat4) {
        return new Uniform(name, mat4.elements, GlslConst.MAT4);
    }

    static createByVec3(name, vec3) {
        return new Uniform(name, vec3, GlslConst.VEC3);
    }

    static createByVec4(name, vec4) {
        return new Uniform(name, vec4, GlslConst.VEC4);
    }

    static createByFloat(name, number) {
        return new Uniform(name, number, GlslConst.FLOAT);
    }

    static createByTexture(name, texture) {
        let textureType = texture.isTexture2D ? GlslConst.SAMPLER_2D : GlslConst.SAMPLER_CUBE;
        return new Uniform(name, texture, textureType);
    }
}
