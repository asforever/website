import WebglNode from "./WebglNode";

export default class WebglNodes {

    static create(nodes) {
        let webglNodes = new WebglNodes();
        webglNodes.addNodes(nodes);
        return webglNodes;
    }

    constructor() {
        this.data = [];
    }

    get() {
        return this.data;
    }

    addNodes(nodes) {
        nodes.forEach(node => {
            let webglNode = WebglNode.create(node);
            this.data.push(webglNode);
        });
    }
}