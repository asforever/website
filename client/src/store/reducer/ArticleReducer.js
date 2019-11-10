import {FetchActionType} from "../ActionType";
import {StorageMgr} from "../../app";

const articleMgr = StorageMgr.getInstance().articleMgr;

const ArticleReducer = (state = articleMgr, action) => {
    let newArticleMgr = articleMgr.clone();
    switch (action.type) {
        case FetchActionType.FETCH_ARTICLE_CATEGORY_SUCCESS:
            newArticleMgr.setArticleCategory(action.data);
            return newArticleMgr;
        case FetchActionType.FETCH_ARTICLE_SUCCESS:
            return newArticleMgr;
    }
    return state;
};

export default ArticleReducer;

