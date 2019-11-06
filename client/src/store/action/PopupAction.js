//打开保存blog的弹框
import {PopupActionType} from "../ActionType";
export const PopupSaveBlog = (data) => ({
    type: PopupActionType.POPUP_SAVE_BLOG,
    data: data,
});

//关闭弹窗
export const PopupClose = () => ({
    type: PopupActionType.POPUP_CLOSE,
});






