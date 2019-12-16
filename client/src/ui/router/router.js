import IntroductionPage from "../pages/IntroductionPage";
import ArticlePage from "../pages/ArticlePage";
import ExamplePage from "../pages/ExamplePage";
import HelpPage from "../pages/HelpPage";
import EditorPage from "../pages/EditorPage";
import MainPage from "../pages/MainPage";
import EmptyPage from "../pages/EmptyPage";
import LoginPage from "../pages/LoginPage";

export default {
    root: {
        name: "root",
        path: "/",
        redirect: "/home",
    },
    editor: {
        name: "editor",
        path: "/editor",
        component: EditorPage,
    },
    login: {
        name: "login",
        path: "/login",
        component: LoginPage,
    },
    home: {
        name: "home",
        path: "/home",
        component: MainPage,
        children: {
            empty: {
                name: "empty",
                path: "",
                component: EmptyPage,
            },
            introduction: {
                name: "主页",
                path: "/home/introduction",
                component: IntroductionPage,
            },
            articles: {
                name: "文章",
                path: "/home/articles",
                component: ArticlePage,
            },
            examples: {
                name: "案例",
                path: "/home/examples",
                component: ExamplePage,
            },
            help: {
                name: "帮助",
                path: "/home/help",
                component: HelpPage,
            },
        }
    },
}
