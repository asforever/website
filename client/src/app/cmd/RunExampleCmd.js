import Cmd from "./base/Cmd";

export default class RunExampleCmd extends Cmd {
    constructor(exampleId, canvas) {
        super();
        this.exampleId = exampleId;
        this.canvas = canvas;
    }

    run() {
        super.run();
        let {exampleMgr} = this.context;
        exampleMgr.runExampleById(this.exampleId, this.canvas).then();
    }

    stop() {
        super.stop();
    }

}
