import {ArticleMgr} from "./ArticleMgr";
import {PopupMgr} from "./PopupMgr";

export class StorageMgr {
    static _ins = null;

    static getInstance() {
        return StorageMgr._ins = StorageMgr._ins || new StorageMgr();
    }

    constructor() {
        this.articleMgr = new ArticleMgr();
        this.popupMgr = new PopupMgr();
    }
}
