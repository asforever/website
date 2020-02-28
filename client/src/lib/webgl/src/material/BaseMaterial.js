import Material from "./Material";
import Color from "../math/color/Color";
import MaterialConst from "./MaterialConst";

export default class BaseMaterial extends Material {
    /**
     @return {*}
     */
    static create(option = {}) {
        let baseMaterial = new BaseMaterial();
        baseMaterial.diffuse = option.diffuse;
        return baseMaterial;
    }

    constructor(option = {}) {
        super();
        this.type = MaterialConst.BASE;
        this.diffuse = Color.create();
        this.spec = Color.create();
        this.diffuseMap = option.diffuseMap;
    }
}
