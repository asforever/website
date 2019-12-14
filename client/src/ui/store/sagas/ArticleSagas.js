import {take, call, put, fork, cancelled} from "redux-saga/effects"
import {FetchActionType} from "../action/ActionType";
import {
    DeleteArticleError,
    DeleteArticleSuccess,
    FetchArticleCategoryError,
    FetchArticleCategorySuccess,
    FetchArticleError,
    FetchArticleSuccess,
    SaveArticleError,
    SaveArticleSuccess
} from "../action/ArticleAction";
import defaultState from "../state/defaultState";

const articleMgr = defaultState.articleMgr;

function* GetArticles() {
    while (true) {
        const action = yield take(FetchActionType.FETCH_ARTICLE_REQUEST);
        const result = yield call(articleMgr.getArticles.bind(articleMgr), action.params.category);
        if (result.error) {
            yield put(FetchArticleError());
        } else {
            yield put(FetchArticleSuccess(result));
        }
    }
}

function* SaveArticleSaga() {
    while (true) {
        const action = yield take(FetchActionType.SAVE_ARTICLE_REQUEST);
        const result = yield call(articleMgr.createArticle.bind(articleMgr), action.params);
        if (result.error) {
            yield put(SaveArticleError());
        } else {
            yield put(SaveArticleSuccess(result));
        }
    }
}

function* ArticleCategorySaga() {
    while (true) {
        const action = yield take(FetchActionType.FETCH_ARTICLE_CATEGORY_REQUEST);
        const result = yield call(articleMgr.getArticleCategory.bind(articleMgr));
        if (result.error) {
            yield put(FetchArticleCategoryError());
        } else {
            yield put(FetchArticleCategorySuccess(result));
        }
    }
}

function* DeleteArticleSaga() {
    while (true) {
        const action = yield take(FetchActionType.DELETE_ARTICLE_REQUEST);
        const result = yield call(articleMgr.deleteArticle.bind(articleMgr), action.params);
        if (result.error) {
            yield put(DeleteArticleError());
        } else {
            yield put(DeleteArticleSuccess(result));
        }
    }
}

export default [ArticleCategorySaga(), SaveArticleSaga(), GetArticles(), DeleteArticleSaga()];
