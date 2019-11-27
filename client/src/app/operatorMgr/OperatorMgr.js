import ArticleOp from "./ArticleOperator";
import PopupOp from "./PopupOperator";
import UserOp from "./UserOperator";
import {StorageMgr} from "../storage/StorageMgr";

const allOp = Object.assign(ArticleOp, PopupOp, UserOp);

export class OperatorMgr {
    static exec(type, params) {
        return allOp[type](params);
    }
}
