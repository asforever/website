import articleMgr from "./articleMgr";
import userMgr from "./userMgr";
import exampleMgr from "./exampleMgr";

class StorageMgr {
    constructor() {
        this.articleMgr = articleMgr;
        this.userMgr = userMgr;
        this.exampleMgr = exampleMgr;
    }
}

const storageMgr = new StorageMgr();
export default storageMgr;
