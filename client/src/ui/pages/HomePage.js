import React from "react"
import Header from "../../lib/yong-ui/components/nav/Header";
import TopNav from "../../lib/yong-ui/components/nav/TopNav";
import SliderInput from "../../lib/yong-ui/components/input/SliderInput";

import ContentBar from "../container/ContentBar";
import {withRouter} from "react-router-dom";
import router from "../router/router";


function HomePage(props) {
    const lists = Object.values(router.home.children);
    const {history, location} = props;

    let listIndex = lists.findIndex((list => {
        return list.path === location.pathname
    }));
    const handleClickHeader = (evt, list) => {
        let path = list.path;
        if (location.pathname === path) return;
        history.push(path);
    };

    return <>
        <div>
            <Header/>
            <TopNav defaultIndex={listIndex} lists={lists} onClick={handleClickHeader}/>
            <ContentBar {...props}/>
        </div>
    </>
}

export default withRouter(HomePage);
