import UniformsCreator from "../uniform/UniformsCreator";
import AttributesCreator from "../attribute/AttributesCreator";
import MaterialConst from "../material/MaterialConst";
import UniformChunk from "../uniform/UniformChunk";

export default class WebglNode {

    static create(node) {
        let webglNode = new WebglNode();
        let material = node.material;
        let mesh = node.mesh;

        webglNode.uniformChunk =    UniformChunk.create().fromNode(node);
        webglNode.attributeChunk = mesh.attributeChunk;
        webglNode.materialType = material ? material.type : MaterialConst.BASE;
        return webglNode;
    }


    constructor() {
        this.uniformChunk = null;
        this.attributeChunk = null;
        this.materialType = "";
    }

    update() {

    }
}