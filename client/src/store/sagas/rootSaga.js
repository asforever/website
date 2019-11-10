import {all} from "redux-saga/effects";
import {ArticleSagas} from "./ArticleSagas";

export default function* rootSaga() {
    yield all([ArticleSagas()])
}
