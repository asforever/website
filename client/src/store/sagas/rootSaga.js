import {all} from "redux-saga/effects";
import {SaveBlogSaga} from "./BlogSagas";

export default function* rootSaga() {
    yield all([SaveBlogSaga()])
}
