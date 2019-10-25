import {PopupType} from "../action/PopupAction";
import {FileFormat, ResourceManager, WebURL} from "../../resource";
import {Blog} from "../../app";

const PopupReducer = (state, action) => {
    let newState = {};
    switch (action.type) {
        case PopupType.SAVE_BLOG:
            ResourceManager.send({
                url: WebURL.SAVE_BLOG,
                method: "POST",
                params: action.data,
                format: FileFormat.TEXT
            });
            break;
    }

    newState.type = action.type;
    newState.data = action.data;
    return newState;
};

export default PopupReducer;

