import {WebglContextConst} from "../const/GlobalConst";

;
import GMath from "../math/GMath";

export default class Texture2D {
    static create(option) {
        return new Texture2D(option);
    }

    constructor(option = {}) {
        this.isTexture2D = true;
        this.id = GMath.generateUUID();

        this.wrapS = WebglContextConst.CLAMP_TO_EDGE;
        this.wrapT = WebglContextConst.CLAMP_TO_EDGE;
        this.minFilter = WebglContextConst.NEAREST_MIPMAP_LINEAR;
        this.maxFilter = WebglContextConst.NEAREST;

        this.levels = 0;
        this.internalFormat = option.internalFormat || WebglContextConst.RGBA;
        this.width = 512;
        this.height = 512;
        this.border = 0;
        this.format = option.format || WebglContextConst.RGBA;
        this.type = WebglContextConst.UNSIGNED_BYTE;
        this.image = option.image || null;
        this.useMipMap = true;




        this.needsUpdate = true;
    }
}
