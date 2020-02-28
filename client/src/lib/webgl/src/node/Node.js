import Translation from "../math/transform/Translation";
import Quaternion from "../math/transform/Quaternion";
import Scale from "../math/transform/Scale";
import Matrix4 from "../math/matrix/Matrix4";
import Matrix3 from "../math/matrix/Matrix3";
import GMath from "../math/GMath";
import NodeConst from "./NodeConst";


export default class Node {
    static create() {
        return new Node();
    }

    //attribute
    constructor() {
        //public
        this.id = GMath.generateUUID();
        this.type = NodeConst.NODE;
        this.visible = true;

        //transform
        this.translation = Translation.create();
        this.quaternion = Quaternion.create();
        this.scale = Scale.create();

        this.worldTranslation = Translation.create();

        this.up = Translation.create(0, 1, 0);
        this.matrix = new Matrix4();
        this.normalMatrix = new Matrix3();
        this.mesh = null;
        this.material = null;
        this.children = [];
        //
        this.isTransform = false;

        let transformChangeHandle = this.transformChange.bind(this);
        this.translation.eventDispatch.addEventListen(Translation.CHANGE, transformChangeHandle);
        this.quaternion.eventDispatch.addEventListen(Translation.CHANGE, transformChangeHandle);
        this.scale.eventDispatch.addEventListen(Translation.CHANGE, transformChangeHandle);
    }

    transformChange() {
        this.isTransform = true;
    }

    //method
    setMaterial(material) {
        this.material = material;
    }

    addChild() {
        this.children.push(...arguments);
    }

    traverse(callback) {
        this.children.forEach(child => {
            callback(child);
            child.traverse(callback);
        });
    }

    //matrix

    updateMatrix() {
        this.matrix.updateByTransform(this.translation, this.quaternion, this.scale);
        this.normalMatrix.normalFromMat4(this.matrix);
        this.updateWorldTranslation();
    }

    updateTransformFromMatrix() {
        this.quaternion.elements = this.matrix.getQuaternion().elements;
        this.translation.elements = this.matrix.getTranslation().elements;
        this.scale.elements = this.matrix.getScaling().elements;
        this.updateWorldTranslation();
    }

    updateWorldTranslation() {
        this.worldTranslation.elements = Translation.create(0, 0, 0)
            .transformMat4(this.matrix.clone().invert()).elements;
    }

    lookAt(target) {
        this.matrix.lookAt(this.translation, target, this.up);
        this.updateTransformFromMatrix();
    }
}
