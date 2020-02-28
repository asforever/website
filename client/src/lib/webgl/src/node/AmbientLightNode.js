import NodeConst from "./NodeConst";
import LightNode from "./LightNode";

export default class AmbientLightNode extends LightNode {
    static create(scene) {
        return new AmbientLightNode();
    }

    constructor() {
        super();
        this.type = NodeConst.AMBIENT_LIGHT_NODE;
        this.intensity = 0.2;
    }

}
