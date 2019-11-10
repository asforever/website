//打开保存article的弹框
import {PopupActionType} from "../ActionType";

export const PopupSaveArticle = (data) => ({
    type: PopupActionType.POPUP_SAVE_ARTICLE,
    data: data,
});
export const ClosePopupSaveArticle = () => ({
    type: PopupActionType.CLOSE_POPUP_SAVE_ARTICLE,
});

export const PopupMsg = (data) => ({
    type: PopupActionType.POPUP_MSG,
    data: data,
});
export const ClosePopupMsg = () => ({
    type: PopupActionType.CLOSE_POPUP_MSG,
});






