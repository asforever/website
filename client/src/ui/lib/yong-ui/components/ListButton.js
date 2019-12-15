import React, {useState} from "react";
import ThrottleButton from "./ThrottleButton";
import {createStyles} from "../util";
import clsx from "clsx";

let useStyles = createStyles((theme) => ({
    linkButton: {
        display: `flex`,
        userSelect: `none`,
        color: `#757374`,
        cursor: `pointer`,
        '&:hover': {
            textDecorationLine: `underline`
        },
    },
}));

function ListButton(props) {
    const classes = useStyles();
    const className = clsx([classes.listButton, props.className]);
    const {onClick, children} = props;

    return (<div onClick={onClick}
                 children={children}
                 className={className}>
    </div>);
}

export default ThrottleButton(ListButton);
