import FetchUtil from "./FetchUtil";

export {WebURL}  from "./WebURL";
export {FileFormat}  from "./FileFormat";

export class ResourceManager {
    static async send({url, method, params, format, cookie}) {
        const result = {};
        await FetchUtil.fetch({url, method, params, format,cookie}).then((response) => {
            result.response = response;
        }).catch(error => {
            result.error = error;
        });
        return result;
    }
}
