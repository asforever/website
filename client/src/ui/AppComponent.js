import '../style.css';
import React from "react"
import {Provider} from "react-redux";
import store from "./store";
import stateManager from "../lib/yong-ui/state/stateManager"
import ThemeProvider from "../lib/yong-ui/components/provider/ThemeProvider"
import MainComponent from "./MainComponent";

export default function AppComponent() {

    return (
        <Provider store={store}>
            <ThemeProvider theme={stateManager.theme}>
                <MainComponent/>
            </ThemeProvider>
        </Provider>
    )
};


