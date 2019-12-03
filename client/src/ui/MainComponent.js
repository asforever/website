import React from "react"
import router from "./router/router";

import {createStyles} from "./lib/yong-ui/util";
import {RouteList} from "./lib/yong-ui/components/RouteList";
import MainBG from "./component/MainBG";
import LogoBar from "./component/LogoBar";
import HeadBar from "./component/HeadBar";
import ContentBar from "./component/ContentBar";
import RightBar from "./component/RightBar";

const useStyles = createStyles((theme) => ({}));

const MainComponent = (props) => {
    const routerArr = Object.values(router);
    const classes = useStyles();
    /* <RouteList routeList={routerArr}></RouteList>*/

    return <MainBG>
        <LogoBar/>
        <HeadBar routes={routerArr}/>
        <ContentBar leftBar={() => <RouteList routeList={routerArr}></RouteList>}
                    rightBar={() => <RightBar routes={routerArr}/>}/>
    </MainBG>
};

export default MainComponent;
