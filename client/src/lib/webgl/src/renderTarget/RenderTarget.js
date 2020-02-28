import GMath from "../math/GMath";
import WebglContextConst from "../../libs/webgl/WebglContextConst";

export default class RenderTarget {
    static create(option = {}) {
        return new RenderTarget(option);
    }

    constructor(option) {
        this.id = GMath.generateUUID();
        this.texture = option.texture;
        this.width = 512;
        this.height = 512;

        this.frameBufferTarget = WebglContextConst.FRAMEBUFFER;
        this.frameBufferAttachment = WebglContextConst.COLOR_ATTACHMENT0;

        this.needsUpdate = true;
    }
}