import {FetchActionType} from "../action/ActionType";
import ResourceNode from "../../../app/data/store/ResourceNode";
import defaultState from "../state/defaultState";

const articleMgr = defaultState.articleMgr;
const articleState = {
    category: articleMgr.articleTree,
};

const ArticleReducer = (state = articleState, action) => {
    switch (action.type) {
        case FetchActionType.FETCH_ARTICLE_CATEGORY_SUCCESS:
            return Object.assign({}, state, articleState);
        case FetchActionType.FETCH_ARTICLE_SUCCESS:
            return Object.assign({}, state, {curArticles: action.data});
        case FetchActionType.DELETE_ARTICLE_SUCCESS:
            return Object.assign({}, state, {curArticles: action.data});
    }
    return state;
};

export default ArticleReducer;

