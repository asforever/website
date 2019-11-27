import {take, call, put, fork, cancelled} from "redux-saga/effects"
import {FetchActionType} from "../ActionType";
import {
    DeleteArticleError,
    DeleteArticleSuccess,
    FetchArticleCategoryError,
    FetchArticleCategoryRequest,
    FetchArticleCategorySuccess, FetchArticleError, FetchArticleSuccess,
    SaveArticleError,
    SaveArticleSuccess
} from "../action/ArticleAction";
import {ResourceManager, WebURL} from "../../../resource";
import {PopupMsg} from "../action/PopupAction";
import {CmdMgr} from "../../../app/cmdMgr/CmdMgr";
import {OperatorMgr} from "../../../app/operatorMgr/OperatorMgr";
import {OperatorType} from "../../../app/operatorMgr/OperatorType";

function* GetArticle() {
    while (true) {
        const action = yield take(FetchActionType.FETCH_ARTICLE_REQUEST);
        const {response, error} = yield call(OperatorMgr.exec, OperatorType.GET_ARTICLE, action.params);
        if (response) {
            yield put(FetchArticleSuccess(response));
           // yield put(PopupMsg("get article success"));
        } else {
            yield put(FetchArticleError());
           // yield put(PopupMsg("get article error"));
        }
    }
}

function* SaveArticleSaga() {
    while (true) {
        const action = yield take(FetchActionType.SAVE_ARTICLE_REQUEST);
        const {response, error} = yield call(OperatorMgr.exec, OperatorType.CREATE_ARTICLE, action.params);
        if (response) {
            yield put(SaveArticleSuccess());
          //  yield put(PopupMsg("save article success"));
        } else {
            yield put(SaveArticleError());
           // yield put(PopupMsg("save article error"));
        }
    }
}

function* ArticleCategorySaga() {
    while (true) {
        yield take(FetchActionType.FETCH_ARTICLE_CATEGORY_REQUEST);
        const {response, error} = yield call(OperatorMgr.exec, OperatorType.GET_ARTICLE_CATEGORY);
        if (response) {
            yield put(FetchArticleCategorySuccess(response));
            //yield put(PopupMsg("fetch article category success"));
        } else {
            yield put(FetchArticleCategoryError());
           // yield put(PopupMsg("fetch article category error"));
        }
    }
}

function* DeleteArticleSaga() {
    while (true) {
        const action = yield take(FetchActionType.DELETE_ARTICLE_REQUEST);
        const {response, error} = yield call(OperatorMgr.exec, OperatorType.DELETE_ARTICLE, action.params);
        if (response) {
            yield put(DeleteArticleSuccess(response));
            //yield put(PopupMsg("delete article success"));
        } else {
            yield put(DeleteArticleError());
            //yield put(PopupMsg("delete article error"));
        }
    }
}

export default [ArticleCategorySaga(), SaveArticleSaga(), GetArticle(), DeleteArticleSaga()];
