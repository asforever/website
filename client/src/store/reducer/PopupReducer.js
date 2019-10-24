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
                params: {data: new Blog()},
                format: FileFormat.TEXT
            });
            break;
    }
    newState.type = action.type;
    return newState;
};

export default PopupReducer;

