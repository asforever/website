import Matrix4 from "../math/matrix/Matrix4";

export default class Camera {
    //static
    static create() {
        return new Camera();
    };

    constructor() {
        this.projection = new Matrix4();
        this.fov = Math.PI / 3;
        this.aspect = 1.5;
        this.near = 1;
        this.far = 400;

    }

    perspective(fov, aspect, near, far) {
        this.projection.perspective(fov || this.fov, aspect || this.aspect, near || this.near, far || this.far)
    }

}
