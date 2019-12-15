import React from "react";
import clsx from "clsx";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import {createStyles} from "../util";

let useStyles = createStyles((theme) => ({
    photoFrame: {
        padding: `0.2em`,
        backgroundColor: `#ffffff`,
        lineHeight: 0,
    },
}));


function PhotoFrame(props) {
    const classes = useStyles();
    const className = clsx([classes.photoFrame, props.className]);
    const {children} = props;

    return (<div children={children} className={className}>
    </div>)
}

export {PhotoFrame};
