import {FetchActionType} from "../action/ActionType";
import {FileFormat, ResourceManager, WebURL} from "../../resource";

const FetchReducer =(state, action) => {
    let newState = {};
    switch (action.type) {
        case FetchActionType.SAVE_BLOG:
            ResourceManager.send({
                url: WebURL.SAVE_BLOG,
                method: "POST",
                params: action.params,
                format: FileFormat.TEXT
            });
            break;
        case FetchActionType.FETCH_BLOG:
            ResourceManager.send({
                url: WebURL.BLOG,
                params: action.params,
                format: FileFormat.TEXT
            });
            break;
        case FetchActionType.FETCH_BLOG_CATEGORY:
            ResourceManager.send({
                url: WebURL.BLOG_CATEGORY,
                format: FileFormat.TEXT
            });
            //newState.blogCategory = blogCategory;
            break;
    }
    return newState;
};

export default FetchReducer;

