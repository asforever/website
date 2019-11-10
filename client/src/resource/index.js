import FetchUtil from "./FetchUtil";

export {WebURL}  from "./WebURL";
export {FileFormat}  from "./FileFormat";

export class ResourceManager {
    static async send({url, method, params, format}) {
        const result = {};
        await FetchUtil.fetch({url, method, params, format}).then((response) => {
            result.response = response;
        }).catch(error => {
            result.error = error;
        });
        return result;
    }
}
