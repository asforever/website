import React, {useState} from "react";
import ThrottleButton from "./ThrottleButton";
import {createStyles} from "../util";
import clsx from "clsx";

let useStyles = createStyles((theme) => ({
    listButton: {
        display: `flex`,
        userSelect: `none`,
        color: `#9a9899`,
        cursor: `pointer`,
        '&:hover': {
            backgroundColor: `#aaaaaaaa`
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
