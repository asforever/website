import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

import {LinkButton} from "../lib/yong-ui/components/LinkButton";
import {createStyles} from "../lib/yong-ui/util";

const useStyles = createStyles((theme) => ({
    item: {
        margin: `0.5em 1em 0.5em 1em`,
    }
}));

let curPath = null;

function RouteBar(props) {
    const classes = useStyles();
    const {routes, history} = props;
    if (!curPath) curPath = routes[1].path;
    const handleClick = (path) => {
        return function () {
            if (curPath === path) return;
            history.push(path);
            curPath = path;
        }
    };

    return (<>{routes.map((route) => {
        if (!route.path) return;
        return <LinkButton key={route.name}
                           onClick={handleClick(route.path)}
                           className={classes.item}>{route.name}
        </LinkButton>
    })}</>)
}

RouteBar.propTypes = {
    routes: PropTypes.array,
};

export default withRouter(RouteBar);
