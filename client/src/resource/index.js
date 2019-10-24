import FetchUtil from "./FetchUtil";

export {WebURL}  from "./WebURL";
export {FileFormat}  from "./FileFormat";

export class ResourceManager {
    static send({url, method, params,format}) {
        FetchUtil.fetch({url, method, params,format});
    }
}
