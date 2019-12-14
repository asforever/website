class CmdMgr {
    constructor() {
        this.history = [];
    }

    exec(cmd) {
        if (cmd.record) this.history.push(cmd);
        return cmd.run();
    }

}

const cmdMgr = new CmdMgr();
export default cmdMgr;
