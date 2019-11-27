import RouteList from "../component/list/route/RouteList";
import Home from "../pages/home/HomePage";
import ArticleTablePage from "../pages/article/ArticleTablePage";
import ArticleEditorPage from "../pages/articleEditor/ArticleEditorPage";
import LoginPage from "../pages/user/LoginPage";

const baseUrl = process.env.PUBLIC_URL;

const router = new RouteList();

const routeRoot = new RouteList({name: "root", path: baseUrl + ""});
const routeHome = new RouteList({name: "home", path: baseUrl + "home"});
const routeArticleTable = new RouteList({name: "博客", path: baseUrl + "articleTable"});
const routeArticleEditor = new RouteList({name: "articleEditor", path: baseUrl + "articleEditor"});
const login = new RouteList({name: "login", path: baseUrl + "login"});
const demos = new RouteList({name: "案例", path: baseUrl + ""});
/*const demos = new RouteList({name: "案例", path: baseUrl + ""});*/

routeRoot.setRedirect("home");
routeHome.setComponent(Home);
routeArticleTable.setComponent(ArticleTablePage);
routeArticleEditor.setComponent(ArticleEditorPage);
login.setComponent(LoginPage);
demos.setComponent(ArticleEditorPage);

router.addChildren(routeRoot);
router.addChildren(routeHome);
router.addChildren(routeArticleTable);
router.addChildren(routeArticleEditor);
router.addChildren(login);
router.addChildren(demos);

export default router;
