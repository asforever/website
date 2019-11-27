export class CmdMgr {
    static _ins;

    static getInstance() {
        return this._ins = this._ins || new CmdMgr();
    }

    constructor() {
        this.undos = [];
        this.redos = [];
    }

    async run(cmd) {
        let result = await cmd.run();
        if (cmd.needHistory) this.undos.push(cmd);
        return result;
    }

    undo() {
        let cmd = this.undos.pop();
        if (cmd) {
            cmd.undo();
            this.redos.unshift(cmd);
        }
    }

    redo() {
        let cmd = this.redos.shift();
        if (cmd) {
            cmd.redo();
            this.undos.push(cmd);
        }
    }


}
