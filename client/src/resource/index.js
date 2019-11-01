import FetchUtil from "./FetchUtil";

export {WebURL}  from "./WebURL";
export {FileFormat}  from "./FileFormat";

export class ResourceManager {
    static send({url, method, params,format}) {
        return FetchUtil.fetch({url, method, params,format});
    }
}
