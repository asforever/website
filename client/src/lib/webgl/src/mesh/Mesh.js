import GMath from "../math/GMath";
import AttributeChunk from "../attribute/AttributeChunk";

export default class Mesh {
    static create() {
        return new Mesh();
    }

    constructor() {
        this.id = GMath.generateUUID();
        this.attributeChunk = AttributeChunk.create();
    }

    addAttribute(attribute) {
        this.attributeChunk.addAttribute(attribute);
    }

    addIndices(indices) {
        this.attributeChunk.addIndices(indices);
    }

    getAttributes() {
        return this.attributeChunk.attributes;
    }

    reset() {
        return this.attributeChunk.reset();
    }


}
