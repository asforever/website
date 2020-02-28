import {mat3} from "../gl-matrix";

export default class Matrix3 {
    constructor() {
        this.elements = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ];
    }

    normalFromMat4(source) {
        mat3.normalFromMat4(this.elements, source.elements);
        return this;
    }
}
