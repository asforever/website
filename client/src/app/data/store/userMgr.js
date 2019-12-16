import WebResource from "../../../resource/WebResource";
import ResourceNode from "./ResourceNode";

class UserMgr {
    constructor() {
        this.user = null;
    }

    async getUser(params) {
        if (this.user) return this.user;
        let result = await WebResource.getUser(params);
        if (!result.error) {
            this.user = result;
        }
        return result;
    }
}

const userMgr = new UserMgr();
export default userMgr;
