import React from "react";
import clsx from "clsx";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import {createStyles} from "../util";

let useStyles = createStyles((theme) => ({
    paper: {
        backgroundColor: `#fff`,
        borderRadius: `0.2em`,
        margin: `.5em`,
        padding: `1em`,
        boxShadow: `0px 0px 3px #00000033`
    },
}));

function Paper(props) {
    const classes = useStyles();
    const className = clsx([classes.paper, props.className]);
    return (<div {...props} className={className}>
    </div>)
}

export {Paper};
