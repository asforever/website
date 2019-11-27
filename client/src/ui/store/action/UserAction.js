import {FetchActionType} from "../ActionType";

const FetchUserRequest = (params) => ({
    type: FetchActionType.FETCH_USER_REQUEST,
    params: params,
});
const FetchUserSuccess = () => ({
    type: FetchActionType.FETCH_USER_SUCCESS,
});
const FetchUserError = () => ({
    type: FetchActionType.FETCH_USER_ERROR,
});

export {
    FetchUserRequest, FetchUserSuccess, FetchUserError
}
