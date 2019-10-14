import './style.css';
import React from "react"
import {Provider} from "react-redux";
import {HashRouter as Router} from "react-router-dom";

import RouteListComponent from "./component/list/route/RouteListComponent";

import store from "./store";
import router from "./router/router"

export const AppComponent = () => (
    <Provider store={store}>
        <Router>
            <RouteListComponent routeRoot={router}></RouteListComponent>
        </Router>
    </Provider>
);


