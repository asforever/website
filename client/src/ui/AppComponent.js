import '../style.css';
import React from "react"
import {Provider} from "react-redux";
import {HashRouter as Router} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core/styles';
import {SnackbarProvider} from "notistack";

import store from "./store";
import PopupContainerPage from "./pages/popup/PopupContainerPage";
import {mainTheme} from "./theme/Theme";
import MainComponent from "./MainComponent";

export const AppComponent = () => (
    <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
            <Router>
                <MainComponent></MainComponent>
            </Router>
            <SnackbarProvider maxSnack={2}>
                <PopupContainerPage/>
            </SnackbarProvider>
        </ThemeProvider>
    </Provider>
);


