import {PopupActionType} from "../ActionType";
import {StorageMgr} from "../../../app";
import {PopupMgr} from "../../../app/storage/PopupMgr";
import {OperatorMgr} from "../../../app/operatorMgr/OperatorMgr";
import {OperatorType} from "../../../app/operatorMgr/OperatorType";

const popupState = StorageMgr.getInstance().popupMgr;
const PopupReducer = (state = popupState, action) => {
    switch (action.type) {
        case PopupActionType.POPUP_SAVE_ARTICLE:
            OperatorMgr.exec(OperatorType.OPEN_SAVE_ARTICLE_POPUP, action.data);
            return popupState.clone();
        case PopupActionType.CLOSE_POPUP_SAVE_ARTICLE:
            OperatorMgr.exec(OperatorType.CLOSE_SAVE_ARTICLE_POPUP);
            return popupState.clone();
        case PopupActionType.POPUP_MSG:
            OperatorMgr.exec(OperatorType.ADD_MSG_POPUP, action.data);
            return popupState.clone();
        //case PopupActionType.CLOSE_POPUP_MSG:
            //OperatorMgr.exec(OperatorType.OPEN_SAVE_ARTICLE_POPUP, action.data);
            //return popupState.clone();
        //default:
        //    newState = state;
        //    break;
    }
    return state;
};

export default PopupReducer;

