import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";
import ExamplePage from "../pages/ExamplePage";
import HelpPage from "../pages/HelpPage";

export default {
    root: {
        name: "root",
        redirect: "home",
    },
    home: {
        name: "主页",
        path: "/home",
        component: HomePage,
    },
    articles: {
        name: "文章",
        path: "/articles",
        component: ArticlePage,
    },
    examples: {
        name: "案例",
        path: "/examples",
        component: ExamplePage,
    },
    help: {
        name: "帮助",
        path: "/help",
        component: HelpPage,
    },
}
