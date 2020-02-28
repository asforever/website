import Mesh from "./Mesh";
import {box} from "./util/meshUtil";
import Attribute from "../attribute/Attribute";
import {GlslVar} from "../const/GlobalConst";

export default class BoxMesh extends Mesh {
    static create(length, width, height) {
        let boxMesh = new BoxMesh(length, width, height);
        boxMesh.update();
        return boxMesh;
    }

    constructor(length, width, height) {
        super();
        this.length = length;
        this.width = width;
        this.height = height;
    }

    update() {
        this.reset();
        const boxData = box(this.length, this.width, this.height);
        let positionAttribute = new Attribute(GlslVar.POSITION, new Float32Array(boxData.position));
        let uvAttribute = new Attribute(GlslVar.UV, new Float32Array(boxData.uv), 2);
        let normalAttribute = new Attribute(GlslVar.NORMAL, new Float32Array(boxData.normal), 3);
        let indicesAttribute = new Attribute(GlslVar.INDEX, new Int16Array(boxData.indices));
        this.addAttribute(positionAttribute);
        this.addAttribute(normalAttribute);
        this.addAttribute(uvAttribute);
        this.addIndices(indicesAttribute);
    }
}
