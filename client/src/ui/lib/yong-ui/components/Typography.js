import React from "react";
import clsx from "clsx";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import PropTypes from "prop-types";
import {createStyles} from "../util";

let useStyles = createStyles((theme) => ({
    "typography-h1": {
        fontSize: `2em`,
        padding: `0.3em 0 0.3em 0.3em`,
        fontFamily: `fantasy`,
        fontStyle: `italic`,
        color: `#282327`,
    },
    "typography-h2": {
        fontSize: `1.5em`,
        padding: `0.2em 0 0.2em 0.3em`,
        fontFamily: `fantasy`,
        color: `#282327`,
    },
    "typography-h3": {
        fontSize: `0.9em`,
        padding: `0.1em 0 0.1em 0.3em`,
        color: `#757374`,
    },
}));


function Typography(props) {
    const {variant = "h3", children} = props;
    const classes = useStyles();
    const className = clsx([classes["typography-" + variant], props.className]);

    return (<span className={className} children={children}>
    </span>)
}

Typography.propTypes = {
    variant: PropTypes.string,
};

export default Typography;
