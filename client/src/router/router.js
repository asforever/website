import RouteList from "../component/list/route/RouteList";
import Home from "../pages/home/HomePage";
import ArticleTablePage from "../pages/article/ArticleTablePage";
import ArticleEditorPage from "../pages/articleEditor/ArticleEditorPage";

const baseUrl = process.env.PUBLIC_URL;

const router = new RouteList();

const routeRoot = new RouteList({name: "root", path: baseUrl + ""});
const routeHome = new RouteList({name: "home", path: baseUrl + "home"});
const routeArticleTable = new RouteList({name: "articleTable", path: baseUrl + "articleTable"});
const routeArticleEditor = new RouteList({name: "articleEditor", path: baseUrl + "articleEditor"});

routeRoot.setRedirect("home");
routeHome.setComponent(Home);
routeArticleTable.setComponent(ArticleTablePage);
routeArticleEditor.setComponent(ArticleEditorPage);

router.addChildren(routeRoot);
router.addChildren(routeHome);
router.addChildren(routeArticleTable);
router.addChildren(routeArticleEditor);

export default router;
