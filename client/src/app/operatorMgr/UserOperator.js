import {StorageMgr} from "../storage/StorageMgr";
import {ResourceManager, WebURL} from "../../resource";
import {OperatorType} from "./OperatorType";

const userMgr = StorageMgr.getInstance().userMgr;
const getUser = async (params) => {
    const options = {
        url: WebURL.USER,
        params: params,
        method: "POST",
        cookie: true,
    };

    const result = await ResourceManager.send(options);
    userMgr.loadUser(result.response);
    if (userMgr.username) {
        return {response: userMgr, error: result.error};
    } else {
        return {response: result.response, error: result.error};
    }


};

const deleteUser = async (params) => {
    userMgr.reset();
};


export default {
    [OperatorType.GET_USER]: getUser,
    [OperatorType.DELETE_USER]: deleteUser,
};
