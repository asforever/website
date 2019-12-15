import React, {useState} from "react";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import ThrottleButton from "./ThrottleButton";
import clsx from "clsx";
import {createStyles} from "../util";

let useStyles = createStyles((theme) => ({
    link: {
        paddingLeft: `0.3em`,
        color: `#6d62cb`,
    }
}));

function LinkButton(props) {
    const classes = useStyles();
    const className = clsx([classes.link, props.className]);

    const {onClick, children} = props;

    return (<a href="#"
               children={children}
               className={className}
               onClick={onClick}>
    </a>)
}


export default ThrottleButton(LinkButton);
