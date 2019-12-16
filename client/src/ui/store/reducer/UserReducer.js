import {FetchActionType} from "../action/ActionType";
import ResourceNode from "../../../app/data/store/ResourceNode";
import defaultState from "../state/defaultState";

const userMgr = defaultState.userMgr;
const userState = {
    curUser: userMgr.user,
};

const UserReducer = (state = userState, action) => {
    switch (action.type) {
        case FetchActionType.FETCH_USER_SUCCESS:
            return Object.assign({}, {curUser: userMgr.user});
        case FetchActionType.REGISTERED_USER_SUCCESS:
            return Object.assign({}, state);
    }
    return state;
};

export default UserReducer;

