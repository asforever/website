import {take, call, put, fork, cancelled} from "redux-saga/effects"
import {FetchActionType} from "../ActionType";
import {
    FetchArticleCategoryError,
    FetchArticleCategoryRequest,
    FetchArticleCategorySuccess,
    SaveArticleError,
    SaveArticleSuccess
} from "../action/ArticleAction";
import {ResourceManager, WebURL} from "../../resource";
import {PopupMsg} from "../action/PopupAction";

function* SaveArticle(params) {
    const options = {
        url: WebURL.SAVE_ARTICLE,
        params: params,
        method: "POST"
    };

    const {response, error} = yield call(ResourceManager.send, options);
    if (response) {
        yield put(SaveArticleError(params));
        yield put(PopupMsg({data: "save article success"}));
    } else {
        yield put(SaveArticleSuccess());
        yield put(PopupMsg({data: "save article error"}));
    }
}

function* FetchArticleCategory() {
    const options = {
        url: WebURL.ARTICLE_CATEGORY,
    };

    const {response, error} = yield call(ResourceManager.send, options);
    if (response) {
        yield put(FetchArticleCategorySuccess({data: response}));
        yield put(PopupMsg({data: "fetch article category success"}));
    } else {
        yield put(FetchArticleCategoryError());
        yield put(PopupMsg({data: "fetch article category error"}));
    }
}


function* ArticleSagas() {
    while (true) {
        const action = yield take([
            FetchActionType.FETCH_ARTICLE_CATEGORY_REQUEST,
            FetchActionType.FETCH_ARTICLE_REQUEST,
        ]);
        yield fork(FetchArticleCategory);
        if (action.type === FetchActionType.FETCH_ARTICLE_REQUEST)
            yield fork(SaveArticle, action.params);

    }
}

export {ArticleSagas};
