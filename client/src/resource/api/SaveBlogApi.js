import WebApi from "./WebApi";

export  class SaveBlogApi extends WebApi{
    constructor() {
        super();
        this.url += "save_blog/";
        this.params = {};
    }
}
