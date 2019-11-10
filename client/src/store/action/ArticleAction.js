import {FetchActionType} from "../ActionType";

const SaveArticleRequest = ({params}) => ({
    type: FetchActionType.SAVE_ARTICLE_REQUEST,
    params: params,
});
const SaveArticleSuccess = () => ({
    type: FetchActionType.SAVE_ARTICLE_SUCCESS,
});
const SaveArticleError = () => ({
    type: FetchActionType.SAVE_ARTICLE_ERROR,
});

const FetchArticleRequest = ({params}) => ({
    type: FetchActionType.FETCH_ARTICLE_REQUEST,
    params: params,
});

const FetchArticleCategoryRequest = () => ({
    type: FetchActionType.FETCH_ARTICLE_CATEGORY_REQUEST,
});
const FetchArticleCategorySuccess = ({data}) => ({
    type: FetchActionType.FETCH_ARTICLE_CATEGORY_SUCCESS,
    data: data
});
const FetchArticleCategoryError = () => ({
    type: FetchActionType.FETCH_ARTICLE_CATEGORY_ERROR,
});

export {
    FetchArticleRequest
    , FetchArticleCategoryRequest, FetchArticleCategorySuccess, FetchArticleCategoryError
    , SaveArticleRequest, SaveArticleSuccess, SaveArticleError
}
