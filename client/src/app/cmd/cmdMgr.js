import appContext from "../data/AppContext";

class CmdMgr {
    constructor() {
        this.history = [];
        this.context = appContext;
        this.curCmd = null;
    }

    exec(cmd, force = false) {
        if (this.curCmd && this.curCmd.isRun() && !force) return null;

        if (cmd.record) this.history.push(cmd);
        cmd.useContext(this.context);
        return cmd.run();
    }

    stop(cmd) {
        cmd.stop();
    }

}

const cmdMgr = new CmdMgr();
export default cmdMgr;
