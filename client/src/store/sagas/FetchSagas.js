import {take, call, put,fork,cancelled} from "redux-saga/effects"
import {FetchActionType} from "../ActionType";
import {ResourceManager, WebURL} from "../../resource";

function* SaveBlog(params) {
    try{
        yield call(ResourceManager.send, WebURL.SAVE_BLOG, {params: params});
        yield put(FetchActionType.SAVE_BLOG_SUCCESS)
    }catch (e) {
        yield put(FetchActionType.SAVE_BLOG_ERROR)
    }
}
function* SaveBlogSaga(params) {
    while (true) {
        yield take(FetchActionType.SAVE_BLOG_REQUEST);
        yield call(SaveBlog,params);
    }
}
export {SaveBlogSaga};