const examples = {
    Phong: {
        date: "2020-2-1",
        name: "phong",
        module: () => import("../../../lib/webgl/examples/Phong"),
    },
};

class ExampleMgr {
    constructor() {
        this.examples = examples;
        this.curExample = null;
    }

    async runExampleById(id, canvas) {
        if (this.curExample) this.curExample.dispose();
        let exampleData = examples[id];
        let {module} = exampleData;

        const exampleModule = await module();
        const exampleFun = this.examples[id] = exampleModule.default;

        this.curExample = exampleFun.create(canvas);
        return exampleFun;
    }
}

const exampleMgr = new ExampleMgr();
export default exampleMgr;
