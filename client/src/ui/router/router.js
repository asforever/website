import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";
import ExamplePage from "../pages/ExamplePage";
import HelpPage from "../pages/HelpPage";
import EditorPage from "../pages/EditorPage";
import MainPage from "../pages/MainPage";

export default {
    root: {
        name: "root",
        path: "/",
        redirect: "/editor",
    },
    editor: {
        name: "editor",
        path: "/editor",
        component: EditorPage,
    },
    main: {
        name: "main",
        path: "/main",
        component: MainPage,
        children: {
            home: {
                name: "主页",
                path: "/main/home",
                component: HomePage,
            },
            articles: {
                name: "文章",
                path: "/main/articles",
                component: ArticlePage,
            },
            examples: {
                name: "案例",
                path: "/main/examples",
                component: ExamplePage,
            },
            help: {
                name: "帮助",
                path: "/main/help",
                component: HelpPage,
            },
        }
    },
}
