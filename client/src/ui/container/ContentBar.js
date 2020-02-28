import React from "react";
import {createStyles} from "../../lib/yong-ui/util";
import RouteList from "./RouteList";
import router from "../router/router";

const useStyles = createStyles((theme) => ({
    container: {
        width: `100%`,
        marginTop: `3em`,
    },
    contentContainer: {
        margin: `0 auto`,
        width: `50%`,
        minWidth: `50em`,
    },
}));

function ContentBar(props) {
    const classes = useStyles();
    const routerArr = Object.values(router.home.children);
    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <RouteList routeList={routerArr}/>
            </div>
        </div>
    )
}

export default ContentBar;
