import Mesh from "./Mesh";
import {plane} from "./util/meshUtil";
import Attribute from "../attribute/Attribute";
import {GlslVar} from "../const/GlobalConst";

export default class PlaneMesh extends Mesh {
    static create(length, width) {
        let planeMesh = new PlaneMesh(length, width);
        planeMesh.update();
        return planeMesh;
    }

    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    update() {
        this.reset();
        const planeData = plane(this.length, this.width);
        let positionAttribute = new Attribute(GlslVar.POSITION, new Float32Array(planeData.position));
        let uvAttribute = new Attribute(GlslVar.UV, new Float32Array(planeData.uv), 2);
        let normalAttribute = new Attribute(GlslVar.NORMAL, new Float32Array(planeData.normal), 3);
        let indicesAttribute = new Attribute(GlslVar.INDEX, new Int16Array(planeData.indices), 1);
        this.addAttribute(positionAttribute);
        this.addAttribute(normalAttribute);
        this.addAttribute(uvAttribute);
        this.addIndices(indicesAttribute);
    }
}
