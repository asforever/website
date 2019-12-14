import {appContext} from "../../index";

export default class Cmd {
    constructor() {
        this.context = appContext;
        this.record = false;
    }

    run() {

    }

    dispatch(type, params) {
        const mediator = this.context.mediators[type];
        if (!mediator) {
            console.warn("can not find mediator :" + type);
            return;
        }
        mediator.dispatch(type, params);
    }
}
