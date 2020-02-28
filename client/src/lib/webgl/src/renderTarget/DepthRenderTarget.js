import GMath from "../math/GMath";
import WebglContextConst from "../../libs/webgl/WebglContextConst";
import RenderTarget from "./RenderTarget";

export default class DepthRenderTarget extends RenderTarget {
    static create(option = {}) {
        return new DepthRenderTarget(option);
    }

    constructor(option) {
        super(option);
        this.frameBufferTarget = WebglContextConst.DRAW_FRAMEBUFFER;
        this.frameBufferAttachment = WebglContextConst.DEPTH_ATTACHMENT;
    }
}