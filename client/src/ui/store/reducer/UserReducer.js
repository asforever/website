import {FetchActionType} from "../ActionType";
import {StorageMgr} from "../../../app";

const userMgr = StorageMgr.getInstance().userMgr;

const UserReducer = (state = userMgr, action) => {
    switch (action.type) {
        case FetchActionType.FETCH_USER_SUCCESS:
            return userMgr.clone();
        case FetchActionType.FETCH_USER_ERROR:
            return userMgr.clone();
    }
    return state;
};

export default UserReducer;

