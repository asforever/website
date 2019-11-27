import {take, call, put, fork, cancelled} from "redux-saga/effects"
import {OperatorMgr} from "../../../app/operatorMgr/OperatorMgr";
import {OperatorType} from "../../../app/operatorMgr/OperatorType";
import {FetchUserError, FetchUserSuccess, PopupMsg} from "../action";
import {FetchActionType} from "../ActionType";

function* UserAutoSaga() {
    while (true) {
        const action = yield take(FetchActionType.FETCH_USER_REQUEST);
        const {response, error} = yield call(OperatorMgr.exec, OperatorType.GET_USER, action.params);

        if (response) {
            yield put(FetchUserSuccess(response));
            yield put(PopupMsg("登录成功"));
        } else {
            yield put(FetchUserError(error));
            yield put(PopupMsg("未登录"));
        }
    }
}

export default [UserAutoSaga()];
