import exampleMgr from "./store/exampleMgr";

class AppContext {
    constructor() {
        this.exampleMgr = exampleMgr;
    }
}
const appContext = new AppContext();

export default appContext;
