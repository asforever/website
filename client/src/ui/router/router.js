import ExamplePage from "../pages/ExamplePage";
import HomePage from "../pages/HomePage";
import WebglViewPage from "../pages/WebglViewPage";

export default {
    root: {
        name: "root",
        path: "/",
        redirect: "/home/examples",
    },
    webglView: {
        name: "webglView",
        path: "/webglView/:id",
        component: WebglViewPage,
    },
    home: {
        name: "home",
        path: "/home",
        component: HomePage,
        children: {
            examples: {
                name: "Example",
                path: "/home/examples",
                component: ExamplePage,
            },
        }
    },
}
