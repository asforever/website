import React from "react";
import clsx from "clsx";
import {createStyles} from "../util";

let useStyles = createStyles((theme) => ({
    container: {
        display: `flex`,
        justifyContent: `center`,
    },
}));

function Container(props) {
    const classes = useStyles();
    const className = clsx([classes.container, props.className]);

    return (<div  {...props} className={className}>
    </div>)
}

export {Container};
