import NodeConst from "./NodeConst";
import LightNode from "./LightNode";
import Color from "../math/color/Color";
import Translation from "../math/transform/Translation";
import RenderTarget from "../renderTarget/RenderTarget";
import DepthTexture2D from "../material/DepthTexture2D";
import DepthRenderTarget from "../renderTarget/DepthRenderTarget";
import Matrix4 from "../math/matrix/Matrix4";

export default class DirectionalLightNode extends LightNode {
    static orthoMatrix = new Matrix4().ortho(-20, 20, -20, 20, 1, 50);

    static create(scene) {
        return new DirectionalLightNode();
    }

    constructor() {
        super();
        this.type = NodeConst.DIRECTIONAL_LIGHT_NODE;
        this.shadowRenderTarget = DepthRenderTarget.create({texture: DepthTexture2D.create()});
        this.target = Translation.create();
        this.projViewMatrix = Matrix4.create();
        this.intensity = 0.5;
    }

    getDirection() {
        return this.target.clone().sub(this.worldTranslation);
    }

    updateMatrix() {
        super.updateMatrix();
        this.matrix.updateByTransform(this.translation, this.quaternion, this.scale);
        this.projViewMatrix = DirectionalLightNode.orthoMatrix.clone().multiplyMatrix4(this.matrix);
    }

}
