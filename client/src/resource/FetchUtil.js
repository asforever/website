import {FileFormat} from "./FileFormat";

export default class FetchUtil {
    static fetch({url = "", method = "GET", params, format}) {

        let defaultOption = {
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        };

        let newURL = url;
        if (method === "POST") {
            defaultOption.body = JSON.stringify(params || {});
        } else if (method === "GET") {
            if (params && params instanceof Array) {
                params.forEach(param => {
                    newURL += param + '/';
                })
            }
        }

        return new Promise(r => {
            fetch(url, defaultOption).then(response => {
                switch (format) {
                    case FileFormat.TEXT:
                        response.text().then(d => {
                            r(d);
                        });
                        break;
                    case FileFormat.IMAGE:
                        response.blob().then((imageBlob) => {
                            let image = new Image();
                            window.test = URL.createObjectURL(imageBlob)
                            image.src = URL.createObjectURL(imageBlob);
                            image.onload = () => {
                                r(image);
                            };
                        });
                        break;
                    default:
                        r(response.json());
                        break;
                }
            });
        });
    }
}
