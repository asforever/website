import {PopupType} from "../action/PopupAction";

const PopupReducer = (state, action) => {
    let newState = {};
    switch (action.type) {
        case PopupType.SAVE_BLOG:

            break;
    }
    newState.type = action.type;
    return newState;
};

export default PopupReducer;

