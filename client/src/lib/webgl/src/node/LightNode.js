import Node from "./Node";
import Color from "../math/color/Color";

export default class LightNode extends Node {
    static create() {
        return new LightNode();
    }

    constructor() {
        super();
        this.diffuse = Color.create(1, 1, 0.8, 1);
        this.specular = Color.create(1, 0.8, 0.8, 1);
        this.visible = false;
        this.castShadow = false;
        this.intensity = 1;
    }

}
