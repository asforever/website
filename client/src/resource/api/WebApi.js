import FetchUtil from "../FetchUtil";

export default class WebApi {
    constructor() {
        this.url = "";
        this.type = "GET";
        this.format = null;
        this.params = {};
    }
}
