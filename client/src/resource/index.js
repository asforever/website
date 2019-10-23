import FetchUtil from "./FetchUtil";

export {SaveBlogApi}  from "./api/SaveBlogApi";

export class ResourceManager {
    static send(api) {
        FetchUtil.fetch(api);
    }
}
