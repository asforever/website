import {take, call, put, fork, cancelled} from "redux-saga/effects"
import {FetchActionType} from "../ActionType";
import {SaveBlogError, SaveBlogSuccess} from "../action/BlogAction";
import {ResourceManager, WebURL} from "../../resource";

function* SaveBlog(params) {
    try {
        const options = {
            url: WebURL.SAVE_BLOG,
            params: params,
            method: "POST"
        };

        yield call(ResourceManager.send, options);
        yield put(SaveBlogSuccess(params))
    } catch (e) {
        yield put(SaveBlogError())
    }
}

function* SaveBlogSaga() {
    while (true) {
        const action = yield take(FetchActionType.SAVE_BLOG_REQUEST);
        yield call(SaveBlog, action.params);
    }
}

export {SaveBlogSaga};