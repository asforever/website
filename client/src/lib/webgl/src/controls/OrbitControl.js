import Translation from "../math/transform/Translation";
import Quaternion from "../math/transform/Quaternion";

export default class OrbitControl {
    static create(cameraNode, dom) {
        let control = new OrbitControl(cameraNode, dom);
        control.start();
        return control;
    }

    constructor(cameraNode, dom) {
        this.cameraNode = cameraNode;
        this.dom = dom;

        this.target = Translation.create();
        this.downPoint = Translation.create();
        this.movePoint = Translation.create();
        this.isDown = false;
        this.speed = 0.2;

        this.angleY = 0;
        this.angleX = 0;
    }

    start() {
        this.dom.addEventListener("mousewheel", this.onMouseWheel, false);
        this.dom.addEventListener("mousedown", this.onMouseDown, false);
        this.dom.addEventListener("mousemove", this.onMouseMove, false);
        this.dom.addEventListener("mouseup", this.onMouseUp, false);
        this.dom.addEventListener("mouseover", this.onMouseUp, false);
    }

    onMouseWheel = (evt) => {
        const cameraNode = this.cameraNode;
        const dir = cameraNode.translation.clone().sub(this.target);
        let scale = evt.deltaY > 0 ? 1.1 : 0.9;
        cameraNode.translation.copy(dir.add(this.target).scale(scale));
    };

    onMouseDown = (evt) => {
        this.downPoint.set(evt.clientX, evt.clientY, 0);
        this.movePoint.set(evt.clientX, evt.clientY, 0);
        this.isDown = true;
    };

    onMouseMove = (evt) => {
        if (!this.isDown) return;
        let movePoint = Translation.create(evt.clientX, evt.clientY, 0);
        let offsetPoint = this.movePoint.sub(movePoint).scale(this.speed * 0.05);

        const cameraNode = this.cameraNode,
            quaternion = cameraNode.quaternion,
            offsetX = offsetPoint.getX(),
            offsetY = -offsetPoint.getY();

        this.movePoint.set(evt.clientX, evt.clientY, 0);
        if (Math.abs(this.angleX + offsetY) >= Math.PI) return;

        this.angleY += offsetX;
        this.angleX += offsetY;

        let verAxis = Translation.create(1, 0, 0).transformQuat(quaternion.clone().invert());
        quaternion.rotationY(-offsetX);
        quaternion.rotateAroundAxis(verAxis, offsetY);


    };

    onMouseUp = (evt) => {
        this.isDown = false;
    }
}
