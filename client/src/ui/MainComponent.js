import React, {useEffect, useState} from "react"
import {HashRouter as Router} from "react-router-dom";
import RouteList from "./container/RouteList";
import router from "./router/router";
import {connect} from "react-redux";
import MsgProvider from "../lib/yong-ui/components/provider/MsgProvider";

function MainComponent(props) {
    const routerArr = Object.values(router);

    return (<>
            <Router>
                <RouteList routeList={routerArr}></RouteList>
            </Router>
            <MsgProvider/>
        </>
    )
};

export default connect()(MainComponent)
