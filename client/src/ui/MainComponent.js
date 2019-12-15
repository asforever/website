
import React from "react"
import {HashRouter as Router} from "react-router-dom";
import RouteList from "./lib/yong-ui/components/RouteList";
import router from "./router/router";

function MainComponent() {
    const routerArr = Object.values(router);

    return (
        <Router>
            <RouteList routeList={routerArr}></RouteList>
        </Router>
    )
};

export default MainComponent

