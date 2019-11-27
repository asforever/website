export class Cmd {
    static RUNNING = 0;
    static STOP = 0;

    constructor(body) {
        this.type = "";
        this.state = Cmd.STOP;
        this.body = body;
        this.needHistory = true;
    }

    async run() {
    }

    undo() {
    }

    redo() {
    }
}
