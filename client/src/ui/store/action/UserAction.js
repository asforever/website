import {FetchActionType} from "./ActionType";

const FetchUserRequest = (params) => ({
    type: FetchActionType.FETCH_USER_REQUEST,
    params: params,
});
const FetchUserSuccess = (data) => ({
    type: FetchActionType.FETCH_USER_SUCCESS,
});
const FetchUserError = () => ({
    type: FetchActionType.FETCH_USER_ERROR,
});

const RegisteredUserRequest = (params) => ({
    type: FetchActionType.REGISTERED_USER_REQUEST,
    params: params,
});
const RegisteredUserSuccess = (data) => ({
    type: FetchActionType.REGISTERED_USER_SUCCESS,
});
const RegisteredUserError = () => ({
    type: FetchActionType.REGISTERED_USER_ERROR,
});

export {
    FetchUserRequest, FetchUserSuccess, FetchUserError,
    RegisteredUserRequest, RegisteredUserSuccess, RegisteredUserError,
}
