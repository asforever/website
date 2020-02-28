export default class Color {
    static create(r = 1, g = 1, b = 1, a = 1) {
        return new Color(r, g, b, a);
    }

    constructor(r, g, b, a) {
        this.elements = [r, g, b, a];
    }

    get() {
        return this.elements;
    }

    set(r = 1, g = 1, b = 1, a = this.elements[3]) {
        this.elements [0] = r;
        this.elements [1] = g;
        this.elements [2] = b;
        this.elements [3] = a;
    }
}

