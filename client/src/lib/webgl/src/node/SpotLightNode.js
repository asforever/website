import Node from "./Node";
import NodeConst from "./NodeConst";
import Translation from "../math/transform/Translation";

export default class SpotLightNode extends Node {
    static create(scene) {
        return new SpotLightNode();
    }

    constructor() {
        super();
        this.type = NodeConst.SPOT_LIGHT_NODE;
        this.dir = Translation.create(0, -1, -1);
        this.cutOff = Math.cos(Math.PI / 180 * 7.5);
        this.outerCutOff = Math.cos(Math.PI / 180 * 12);
        this.constant = 1.0;
        this.linear = 0.09;
        this.quadratic = 0.032;
    }

}
