import FetchUtil from "../FetchUtil";
import WebURL from "./WebURL";

export default class WebApi {
    constructor() {
        this.url = WebURL.ROOT_URL;
        this.method = "GET";
        this.format = null;
        this.params = {};
    }
}
