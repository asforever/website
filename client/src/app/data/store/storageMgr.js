import {articleMgr} from "./articleMgr";

class StorageMgr {
    constructor() {
        this.articleMgr = articleMgr;
    }
}

const storageMgr = new StorageMgr();
export {storageMgr};
