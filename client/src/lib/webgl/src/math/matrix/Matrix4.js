import {mat4} from "../gl-matrix";
import Translation from "../transform/Translation";
import Rotation from "../transform/Rotation";
import Scale from "../transform/Scale";
import Quaternion from "../transform/Quaternion";

export default class Matrix4 {
    static create() {
        return new Matrix4();
    }

    constructor() {
        this.elements = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    }

    perspective(fov, aspect, near, far) {
        mat4.perspective(this.elements, fov, aspect, near, far);
        return this;
    }

    ortho(left, right, bottom, top, near, far) {
        mat4.ortho(this.elements, left, right, bottom, top, near, far);
        return this;
    }

    updateByTransform(translation, quaternion, scale) {
        mat4.fromRotationTranslationScale(this.elements, quaternion.elements, translation.elements, scale.elements);
    }

    getTranslation() {
        let translation = Translation.create();
        mat4.getTranslation(translation.elements, this.elements);
        return translation;
    }

    getQuaternion() {
        let quaternion = Quaternion.create();
        mat4.getRotation(quaternion.elements, this.elements);
        return quaternion;
    }

    getScaling() {
        let scale = Scale.create();
        mat4.getScaling(scale.elements, this.elements);
        return scale;
    }

    lookAt(eye, target, up) {

        let zAxis = eye.clone().sub(target).normalize();
        let xAxis = up.clone().cross(zAxis).normalize();
        let yAxis = zAxis.clone().cross(xAxis);

        let xT = -xAxis.clone().dot(eye);
        let yT = -yAxis.clone().dot(eye);
        let zT = -zAxis.clone().dot(eye);

        this.elements = [
            xAxis.getX(), yAxis.getX(), zAxis.getX(), 0,
            xAxis.getY(), yAxis.getY(), zAxis.getY(), 0,
            xAxis.getZ(), yAxis.getZ(), zAxis.getZ(), 0,
            xT, yT, zT, 1
        ];
    }

    invert() {
        mat4.invert(this.elements, this.elements);
        return this;
    }

    clone() {
        let mat4 = Matrix4.create();
        mat4.elements = this.elements.concat();
        return mat4;
    }

    multiplyMatrix4(matrix) {
        mat4.mul(this.elements, this.elements, matrix.elements);
        return this;
    }

    fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        this.elements = mat4.fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    }

    fromRotationTranslationScale(quaternion, translation, scale) {
        mat4.fromRotationTranslationScale(this.elements, quaternion.elements, translation.elements, scale.elements);
    }

}
