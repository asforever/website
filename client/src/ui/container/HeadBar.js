import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import PropTypes from "prop-types";
import RouteBar from "./RouteBar";
import router from "../router/router";

const useStyles = createStyles((theme) => ({
    headContainer: {
        width: `100%`,
        borderBottom: `1px Dashed #ccc`,
        borderTop: `1px Dashed #ccc`,
        display: `flex`,
    },
}));

function HeadBar(props) {
    const classes = useStyles();
    const routerArr = Object.values(router.home.children);

    return (
        <div className={classes.headContainer}>
            <RouteBar routes={routerArr}/>
        </div>
    )
}

HeadBar.propTypes = {
    routes: PropTypes.array,
};

export default HeadBar;
