export default class ResourceNode {
    constructor(data, children = {}) {
        this.data = data;
        this.children = children;
        this.level = 0;
    }

    addChild(child) {
        child.level = this.level + 1;
        this.children[child.data.id] = child;
        return child;
    }

    addChildren(children) {
        for (let i in children) {
            this.addChild(children[i]);
        }
    }

    getChild(id) {
        return this.children[id];
    }

    clone() {
        return new ResourceNode(this.data, this.children);
    }
}
