import AttributesCreator from "./AttributesCreator";
import GMath from "../math/GMath";

export default class AttributeChunk {
    static create() {
        return new AttributeChunk();
    }

    constructor() {
        this.id = GMath.generateUUID();
        this.attributes = {};
        this.indices = null;
        this.needsUpdate = true;
        this.vertexLength = 0;
    }

    addAttribute(attribute) {
        this.attributes[attribute.name] = attribute;
    }

    addIndices(indices) {
        this.indices = indices;
        this.vertexLength = indices.data.length;
    }

    reset() {
        this.attributes = {};
        this.indices = null;
    }


}

