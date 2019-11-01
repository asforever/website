import RouteList from "../component/list/route/RouteList";
import Home from "../pages/home/HomePage";
import Blog from "../pages/blog/BlogPage";
import BlogEditor from "../pages/blogEditor/BlogEditorPage";
const baseUrl = process.env.PUBLIC_URL;

const router = new RouteList();

const routeRoot = new RouteList({name: "root", path: baseUrl + ""});
const routeHome = new RouteList({name: "home", path: baseUrl + "home"});
const routeBlog = new RouteList({name: "blog", path: baseUrl + "blog"});
const routeBlogEditor = new RouteList({name: "blogEditor", path: baseUrl + "blogEditor"});

routeRoot.setRedirect("home");
routeHome.setComponent(Home);
routeBlog.setComponent(Blog);
routeBlogEditor.setComponent(BlogEditor);

router.addChildren(routeRoot);
router.addChildren(routeHome);
router.addChildren(routeBlog);
router.addChildren(routeBlogEditor);

export default router;
