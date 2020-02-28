import {quat} from "../gl-matrix";
import {quat2} from "../gl-matrix";
import EventDispatch from "../../event/EventDispatch";

export default class Quaternion {
    static CHANGE = "change";

    static create(x = 0, y = 0, z = 0, w = 1) {
        return new Quaternion(x, y, z, w);
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


    set(x, y, z, w = this.elements[3]) {
        this.elements [0] = x;
        this.elements [1] = y;
        this.elements [2] = z;
        this.elements [3] = w;
        this.eventDispatch.dispatch(Quaternion.CHANGE);
    }

    fromEuler(euler) {
        quat.fromEuler(this.elements, ...euler.get());
        this.eventDispatch.dispatch(Quaternion.CHANGE);
    }

    rotationX(rad) {
        quat.rotateX(this.elements, this.elements, rad);
        this.eventDispatch.dispatch(Quaternion.CHANGE);
    }

    rotationY(rad) {
        quat.rotateY(this.elements, this.elements, rad);
        this.eventDispatch.dispatch(Quaternion.CHANGE);
    }

    rotationZ(rad) {
        quat.rotateZ(this.elements, this.elements, rad);
        this.eventDispatch.dispatch(Quaternion.CHANGE);
    }

    rotateAroundAxis(axis, rad) {
        quat2.rotateAroundAxis(this.elements, this.elements, axis.elements, rad);
        this.elements.length = 4;
        this.eventDispatch.dispatch(Quaternion.CHANGE);
    }

    setAxisAngle(axis, rad) {
        quat.setAxisAngle(this.elements, axis.elements, rad);
        this.eventDispatch.dispatch(Quaternion.CHANGE);
        return this;
    }

    invert() {
        quat.invert(this.elements, this.elements);
        this.eventDispatch.dispatch(Quaternion.CHANGE);
        return this;
    }

    clone() {
        return Quaternion.create(...this.get());
    }

    fromMat4(mat4) {
        quat2.fromMat4(this.elements, mat4.elements);
        this.eventDispatch.dispatch(Quaternion.CHANGE);
        return this;
    }

}
