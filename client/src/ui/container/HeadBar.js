import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import PropTypes from "prop-types";
import RouteBar from "./RouteBar";
import router from "../router/router";
import LinkButton from "../lib/yong-ui/components/LinkButton";

const useStyles = createStyles((theme) => ({
    headContainer: {
        width: `100%`,
        borderBottom: `1px Dashed #ccc`,
        borderTop: `1px Dashed #ccc`,
        display: `flex`,
        justifyContent: `space-between`,

    },
}));

function HeadBar(props) {
    const classes = useStyles();
    const routerArr = Object.values(router.home.children);
    const routerUser = [router.signin,router.signup];

    return (
        <div className={classes.headContainer}>
            <RouteBar routes={routerArr}/>
            <RouteBar routes={routerUser}/>
        </div>
    )
}

HeadBar.propTypes = {
    routes: PropTypes.array,
};

export default HeadBar;
