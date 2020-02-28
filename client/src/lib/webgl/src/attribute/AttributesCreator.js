export default class AttributesCreator {
    static createByMesh(mesh) {
        return mesh.getAttributes();
    }

    static createByNode(node) {
        return this.createByMesh(node.mesh);
    }

}
