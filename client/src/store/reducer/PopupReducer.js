import {PopupType} from "../action/PopupAction";
import {ResourceManager, SaveBlogApi} from "../../resource";

const PopupReducer = (state, action) => {
    let newState = {};
    switch (action.type) {
        case PopupType.SAVE_BLOG:
            ResourceManager.send(new SaveBlogApi());
            break;
    }
    newState.type = action.type;
    return newState;
};

export default PopupReducer;

