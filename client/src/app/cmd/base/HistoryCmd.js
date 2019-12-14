import Cmd from "./Cmd";

export default class HistoryCmd extends Cmd {
    constructor() {
        super();
        this.record = true;
    }
}