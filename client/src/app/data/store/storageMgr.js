import articleMgr from "./articleMgr";
import userMgr from "./userMgr";

class StorageMgr {
    constructor() {
        this.articleMgr = articleMgr;
        this.userMgr = userMgr;
    }
}

const storageMgr = new StorageMgr();
export default storageMgr;
