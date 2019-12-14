import {FetchActionType} from "../action/ActionType";
import ResourceNode from "../../../app/data/store/ResourceNode";
import defaultState from "../state/defaultState";

const articleMgr = defaultState.articleMgr;
const articleReducer = {
    category: articleMgr.articleTree
};

const ArticleReducer = (state = articleReducer, action) => {
    switch (action.type) {
        case FetchActionType.FETCH_ARTICLE_CATEGORY_SUCCESS:
            return Object.assign({}, state, articleReducer);
        case FetchActionType.FETCH_ARTICLE_SUCCESS:
            return Object.assign({}, state, {curArticles: action.data});
        //articleMgr.loadArticles(data);
        //case FetchActionType.DELETE_ARTICLE_SUCCESS:

    }
    return state;
};

export default ArticleReducer;

