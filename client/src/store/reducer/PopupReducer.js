import {PopupActionType} from "../ActionType";
import {StorageMgr} from "../../app";
import {PopupMgr} from "../../app/storage/PopupMgr";

const popupState = StorageMgr.getInstance().popupMgr;
const PopupReducer = (state = popupState, action) => {
    let newState = popupState.clone();
    switch (action.type) {
        case PopupActionType.POPUP_SAVE_ARTICLE:
            newState.addPopup(PopupMgr.SAVE_ARTICLE_POPUP, action.data);
            return newState;
        case PopupActionType.CLOSE_POPUP_SAVE_ARTICLE:
            newState.deletePopup(PopupMgr.SAVE_ARTICLE_POPUP);
            break;
        case PopupActionType.POPUP_MSG:
           // state.msgArr.push(action.data);
            newState = Object.assign(state, {});
            break;
        case PopupActionType.CLOSE_POPUP_MSG:
           // state.msgArr.shift();
            newState = Object.assign(state, {});
            break;
        default:
            newState = state;
            break;
    }
    newState.type = action.type;
    return newState;
};

export default PopupReducer;

