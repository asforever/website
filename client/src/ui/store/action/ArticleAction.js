import {FetchActionType} from "./ActionType";

const SaveArticleRequest = (params) => ({
    type: FetchActionType.SAVE_ARTICLE_REQUEST,
    params: params,
});
const SaveArticleSuccess = () => ({
    type: FetchActionType.SAVE_ARTICLE_SUCCESS,
});
const SaveArticleError = () => ({
    type: FetchActionType.SAVE_ARTICLE_ERROR,
});

const FetchArticleRequest = (params) => ({
    type: FetchActionType.FETCH_ARTICLE_REQUEST,
    params: params,
});
const FetchArticleSuccess = (data) => ({
    type: FetchActionType.FETCH_ARTICLE_SUCCESS,
    data: data,
});
const FetchArticleError = (error) => ({
    type: FetchActionType.FETCH_ARTICLE_ERROR,
    error: error,
});
const FetchArticleCategoryRequest = () => ({
    type: FetchActionType.FETCH_ARTICLE_CATEGORY_REQUEST,
});
const FetchArticleCategorySuccess = (data) => ({
    type: FetchActionType.FETCH_ARTICLE_CATEGORY_SUCCESS,
    data: data
});
const FetchArticleCategoryError = () => ({
    type: FetchActionType.FETCH_ARTICLE_CATEGORY_ERROR,
});

const DeleteArticleRequest = (params) => ({
    type: FetchActionType.DELETE_ARTICLE_REQUEST,
    params: params,
});
const DeleteArticleSuccess = (data) => ({
    type: FetchActionType.DELETE_ARTICLE_SUCCESS,
});
const DeleteArticleError = () => ({
    type: FetchActionType.DELETE_ARTICLE_ERROR,
});

export {
    FetchArticleRequest, FetchArticleSuccess, FetchArticleError
    , FetchArticleCategoryRequest, FetchArticleCategorySuccess, FetchArticleCategoryError
    , SaveArticleRequest, SaveArticleSuccess, SaveArticleError
    , DeleteArticleRequest, DeleteArticleSuccess, DeleteArticleError
}
