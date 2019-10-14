import RouteList from "../component/list/route/RouteList";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
const baseUrl = process.env.PUBLIC_URL;

const router = new RouteList();

const routeRoot = new RouteList({name: "root", path: baseUrl + ""});
const routeHome = new RouteList({name: "home", path: baseUrl + "home"});
const routeBlog = new RouteList({blog: "blog", path: baseUrl + "blog"});

routeRoot.setRedirect("home");
routeHome.setComponent(Home);
routeBlog.setComponent(Blog);

router.addChildren(routeRoot);
router.addChildren(routeHome);
router.addChildren(routeBlog);

export default router;
