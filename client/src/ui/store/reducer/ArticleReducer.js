import {FetchActionType} from "../ActionType";
import {StorageMgr} from "../../../app";

const articleMgr = StorageMgr.getInstance().articleMgr;

const ArticleReducer = (state = articleMgr, action) => {
    switch (action.type) {
        case FetchActionType.FETCH_ARTICLE_CATEGORY_SUCCESS:
            return articleMgr.clone();
        case FetchActionType.SAVE_ARTICLE_SUCCESS:
            return articleMgr.clone();
        case FetchActionType.FETCH_ARTICLE_SUCCESS:
            return articleMgr.clone();
        case FetchActionType.DELETE_ARTICLE_SUCCESS:
            return articleMgr.clone();
    }
    return state;
};

export default ArticleReducer;

