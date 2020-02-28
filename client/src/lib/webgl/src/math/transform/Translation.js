import {vec3, vec4} from "../gl-matrix";
import EventDispatch from "../../event/EventDispatch";

export default class Translation {
    static CHANGE = "change";

    static create(x = 0, y = 0, z = 0, w = 1) {
        return new Translation(x, y, z, w);
    }

    constructor(x, y, z, w) {
        this.elements = [x, y, z, w];
        this.eventDispatch = EventDispatch.create();
    }

    get() {
        return this.elements;
    }

    getX() {
        return this.elements[0];
    }

    getY() {
        return this.elements[1];
    }

    getZ() {
        return this.elements[2];
    }

    getXYZ() {
        let e = this.elements;
        return [e[0], e[1], e[2]]
    }

    set(x, y, z, w = this.elements[3]) {
        this.elements [0] = x;
        this.elements [1] = y;
        this.elements [2] = z;
        this.elements [3] = w;
        this.eventDispatch.dispatch(Translation.CHANGE);
    }

    add(target) {
        let t_elements = target.elements;

        this.elements[0] = this.elements[0] + t_elements[0];
        this.elements[1] = this.elements[1] + t_elements[1];
        this.elements[2] = this.elements[2] + t_elements[2];
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    sub(target) {
        let t_elements = target.elements;

        this.elements[0] = this.elements[0] - t_elements[0];
        this.elements[1] = this.elements[1] - t_elements[1];
        this.elements[2] = this.elements[2] - t_elements[2];
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    transformQuat(quad) {
        vec4.transformQuat(this.elements, this.elements, quad.elements);
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    rotateX(origin, angle) {
        let out = this.elements;
        let source = this.getXYZ();
        vec3.rotateX(out, source, origin.elements, angle);
        this.eventDispatch.dispatch(Translation.CHANGE);
    }

    scale(v) {
        vec4.scale(this.elements, this.elements, v);
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    length() {
        return vec4.length(this.elements);
    }

    normalize() {
        const elements = this.elements;
        const x = elements[0];
        const y = elements[1];
        const z = elements[2];
        let len = x * x + y * y + z * z;

        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }

        elements[0] = x * len;
        elements[1] = y * len;
        elements[2] = z * len;
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    cross(target) {
        vec3.cross(this.elements, this.elements, target.elements);
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    copy(target) {
        this.elements = target.elements.concat();
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    dot(target) {
        let a = this.elements;
        let b = target.elements;

        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }

    transformMat4(mat4) {
        vec4.transformMat4(this.elements, this.elements, mat4.elements);
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    transformQuat(quaternion) {
        vec4.transformQuat(this.elements, this.elements, quaternion.elements);
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    multiply(target) {
        vec4.multiply(this.elements, this.elements, target.elements);
        this.eventDispatch.dispatch(Translation.CHANGE);
        return this;
    }

    clone() {
        let r = Translation.create();
        r.elements = this.elements.concat();
        return r;
    }
}
