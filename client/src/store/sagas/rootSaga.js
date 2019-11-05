import {all} from "redux-saga/effects";
import {SaveBlogSaga} from "./FetchSagas";

export default function* rootSaga() {
    yield all([SaveBlogSaga])
}
