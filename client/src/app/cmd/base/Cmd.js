export default class Cmd {

    static STOP = "stop";
    static RUN = "run";

    constructor() {
        this.context = null;
        this.record = false;
        this.state = Cmd.STOP;
    }

    useContext(context) {
        this.context = context;
    }

    isRun() {
        return this.state === Cmd.RUN;
    }

    run() {
        if (this.isRun()) return;

        this.state = Cmd.RUN;
    }

    stop() {
        this.state = Cmd.STOP;
    }

}
