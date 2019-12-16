import {all} from "redux-saga/effects";
import ArticleSagas from "./ArticleSagas";
import UserSagas from "./UserSagas";

export default function* rootSaga() {
    yield all(ArticleSagas.concat(UserSagas))
}
