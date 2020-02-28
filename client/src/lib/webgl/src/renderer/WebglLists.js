import WebglList from "./WebglList";
import UniformsCreator from "../uniform/UniformsCreator";
import MaterialConst from "../material/MaterialConst";

export default class WebglLists {
    static create(webglState,
                  webglCamera,
                  webglLights,
                  webglNodes) {

        let webglLists = new WebglLists();
        webglNodes.get().forEach(webglNode => {
            let list = WebglList.create(
                webglState,
                webglCamera,
                webglLights,
                webglNode);
            webglLists.data.push(list);
        });
        return webglLists;
    }

    constructor() {
        this.data = [];
    }

    get() {
        return this.data;
    }

    clone() {
        let newWebglLists = new WebglLists();
        this.data.forEach(webglList => {
            newWebglLists.data.push(webglList.clone());
        });
        return newWebglLists;
    }

    convertToShadowList(light) {
        let viewUniform = UniformsCreator.createProjViewMat4ByLight(light);
        this.data.forEach(webglList => {
            webglList.convertToShadowList(viewUniform);
        });
    }
}
