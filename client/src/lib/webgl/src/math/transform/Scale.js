import EventDispatch from "../../event/EventDispatch";

export default class Scale {
    static CHANGE = "change";

    static create(x = 1, y = 1, z = 1, w = 1) {
        return new Scale(x, y, z, w);
    }

    constructor(x, y, z, w) {
        this.elements = [x, y, z, w];
        this.eventDispatch = EventDispatch.create();
    }

    get() {
        return this.elements;
    }

    set(x, y, z, w) {
        this.elements [0] = x;
        this.elements [1] = y;
        this.elements [2] = z;
        this.elements [3] = w;
        this.eventDispatch.dispatch(Rotation.CHANGE);
    }
}
