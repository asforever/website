import React from "react"
import MainBG from "../container/MainBG";
import LogoBar from "../container/LogoBar";
import HeadBar from "../container/HeadBar";
import ContentBar from "../container/ContentBar";
import {withRouter} from "react-router-dom";


function MainPage(props) {
    return <>
        <MainBG>
            <LogoBar/>
            <HeadBar/>
            <ContentBar {...props}/>
        </MainBG>
    </>
}

export default withRouter(MainPage);
