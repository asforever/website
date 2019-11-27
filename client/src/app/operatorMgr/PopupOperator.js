import {StorageMgr} from "../storage/StorageMgr";
import {PopupMgr} from "../storage/PopupMgr";
import {OperatorType} from "./OperatorType";

const popupMgr = StorageMgr.getInstance().popupMgr;
const openSaveArticlePopup = async (data) => {
    popupMgr.addPopup(PopupMgr.SAVE_ARTICLE_POPUP, data)
};

const closeSaveArticlePopup = async () => {
    popupMgr.reset(PopupMgr.SAVE_ARTICLE_POPUP)
};

const addMsgPopup = async (data) => {
    popupMgr.addPopup(PopupMgr.MSG_POPUP, data)
};

export default {
    [OperatorType.OPEN_SAVE_ARTICLE_POPUP]: openSaveArticlePopup,
    [OperatorType.CLOSE_SAVE_ARTICLE_POPUP]: closeSaveArticlePopup,
    [OperatorType.ADD_MSG_POPUP]: addMsgPopup,
}


