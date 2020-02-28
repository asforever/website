import {WebglContextConst} from "../const/GlobalConst";
import Texture2D from "./Texture2D";

export default class DepthTexture2D extends Texture2D {
    static create(option) {
        return new DepthTexture2D(option);
    }

    constructor(option = {}) {
        super(option);
        this.wrapS = WebglContextConst.CLAMP_TO_EDGE;
        this.wrapT = WebglContextConst.CLAMP_TO_EDGE;
        this.minFilter = WebglContextConst.NEAREST;
        this.maxFilter = WebglContextConst.NEAREST;

        this.levels = 0;
        this.internalFormat = WebglContextConst.DEPTH_COMPONENT16;
        this.width = 1024;
        this.height = 1024;
        this.format = WebglContextConst.DEPTH_COMPONENT;
        this.type = WebglContextConst.UNSIGNED_SHORT;
        this.useMipMap = false;
    }
}
