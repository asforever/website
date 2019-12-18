import React from "react"
import {HashRouter as Router} from "react-router-dom";
import RouteList from "./lib/yong-ui/components/RouteList";
import router from "./router/router";
import MsgProvider from "./lib/yong-ui/components/MsgProvider";
import {pushMsg} from "./lib/yong-ui/util";

function MainComponent() {
    const routerArr = Object.values(router);
    window.addEventListener("mousedown", () => pushMsg("123"), false);
    return (<>
            <Router>
                <RouteList routeList={routerArr}></RouteList>
            </Router>
            <MsgProvider/>
        </>
    )
};

export default MainComponent

