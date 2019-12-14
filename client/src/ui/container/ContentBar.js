import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import {RouteList} from "../lib/yong-ui/components/RouteList";
import router from "../router/router";
import RightBar from "./RightBar";


const useStyles = createStyles((theme) => ({
    contentContainer: {
        display: `flex`,
        justifyContent: `space-between`,
        width: `100%`,
        marginTop: `0.2em`,
        borderTop: `1px dashed #ccc`,
    },
    leftContainer: {
        padding: `1em`,
        width: `60%`,
    },
    rightContainer: {
        width: `15em`,
        padding: `1em`,
        height: `100vh`,
        borderLeft: `1px dashed #ccc`,
    },
}));

function ContentBar(props) {
    const classes = useStyles();
    const routerArr = Object.values(router.main.children);
    return (
        <div className={classes.contentContainer}>
            <div className={classes.leftContainer}>
                <RouteList routeList={routerArr}/>
            </div>
            <div className={classes.rightContainer}>
                <RightBar/>
            </div>
        </div>
    )
}

export default ContentBar;
