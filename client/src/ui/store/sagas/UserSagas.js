import {take, call, put, fork, cancelled} from "redux-saga/effects"
import {FetchActionType} from "../action/ActionType";
import defaultState from "../state/defaultState";
import {FetchUserError, FetchUserSuccess} from "../action/UserAction";

const userMgr = defaultState.userMgr;

function* GetUser() {
    while (true) {
        const action = yield take(FetchActionType.FETCH_USER_REQUEST);
        const result = yield call(userMgr.getUser.bind(userMgr), action.params);
        if (result.error) {
            yield put(FetchUserError());
        } else {
            yield put(FetchUserSuccess(result));
        }
    }
}

export default [GetUser()];
