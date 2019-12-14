import '../style.css';
import React from "react"
import {Provider} from "react-redux";
import {HashRouter as Router, Route} from "react-router-dom";
import store from "./store";
import stateManager from "./lib/yong-ui/state/stateManager"
import ThemeProvider from "./lib/yong-ui/components/ThemeProvider"
import router from "./router/router";
import {RouteList} from "./lib/yong-ui/components/RouteList";

export default function AppComponent() {
    const routerArr = Object.values(router);
    return (
        <Provider store={store}>
            <ThemeProvider theme={stateManager.theme}>
                <Router>
                    {<RouteList routeList={routerArr}/>}
                </Router>
            </ThemeProvider>
        </Provider>
    )
};


