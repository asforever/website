export class UserMgr {
    loadUser(respose = {}) {
        this.username = respose.username;
        this.password = respose.password;
        this.level = respose.level;
    }

    clone() {
        const result = new UserMgr();
        result.username = this.username;
        result.password = this.password;
        result.level = this.level;
        return result;
    }

    reset() {
        this.username = "";
        this.password = "";
        this.level = -1;
    }
}