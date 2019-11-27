import {ArticleMgr} from "./ArticleMgr";
import {PopupMgr} from "./PopupMgr";
import {ResourceManager, WebURL} from "../../resource";
import {Article} from "../data/Article";
import {UserMgr} from "./UserMgr";

export class StorageMgr {
    static _ins = null;

    static getInstance() {
        return StorageMgr._ins = StorageMgr._ins || new StorageMgr();
    }

    constructor() {
        this.articleMgr = new ArticleMgr();
        this.popupMgr = new PopupMgr();
        this.userMgr = new UserMgr();
    }

}
