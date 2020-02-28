import NodeConst from "./NodeConst";
import LightNode from "./LightNode";
import RenderTarget from "../renderTarget/RenderTarget";
import DepthTexture2D from "../material/DepthTexture2D";

export default class PointLightNode extends LightNode {
    static create(scene) {
        return new PointLightNode();
    }

    constructor() {
        super();
        this.type = NodeConst.POINT_LIGHT_NODE;

        this.constant = 1.0;
        this.linear = 0.09;
        this.quadratic = 0.032;
        this.shadowRenderTarget = RenderTarget.create({texture: DepthTexture2D.create()});
    }

}
