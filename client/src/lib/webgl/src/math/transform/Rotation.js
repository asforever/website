import EventDispatch from "../../event/EventDispatch";

export default class Rotation {
    static CHANGE = "change";

    static create(x = 0, y = 0, z = 0, w = 1) {
        return new Rotation(x, y, z, w);
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
        this.eventDispatch.dispatch(Rotation.CHANGE);
    }


}
