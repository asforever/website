import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import PropTypes from "prop-types";
import RouteBar from "./RouteBar";

const useStyles = createStyles((theme) => ({
    headContainer: {
        width: `100%`,
    },
}));

function RightBar(props) {
    const classes = useStyles();
    const {routes} = props;

    return (
        <div className={classes.headContainer}>
            <RouteBar routes={routes}/>
        </div>
    )
}

RightBar.propTypes = {
    routes: PropTypes.array,
};

export default RightBar;
