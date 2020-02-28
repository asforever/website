import Color from "../math/color/Color";
import MaterialConst from "./MaterialConst";
import BaseMaterial from "./BaseMaterial";

export default class PhongMaterial extends BaseMaterial {
    static create(option = {}) {
        return new PhongMaterial(option);
    }

    constructor(option) {
        super();
        this.type = MaterialConst.PHONG;
        this.diffuse = Color.create();
        this.specular = Color.create(1, 1, 1, 1);
        this.diffuseMap = option.diffuseMap;
        this.specularMap = option.specularMap;
        this.shininess = 32;
    }
}
