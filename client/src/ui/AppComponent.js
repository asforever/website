import '../style.css';
import React from "react"
import {Provider} from "react-redux";
import {HashRouter as Router} from "react-router-dom";
import store from "./store";

import stateManager from "./lib/yong-ui/state/stateManager"
import ThemeProvider from "./lib/yong-ui/components/ThemeProvider"

import MainComponent from "./MainComponent"

export const AppComponent = () => (
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={stateManager.theme}>
                <MainComponent></MainComponent>
            </ThemeProvider>
        </Router>
    </Provider>
);


