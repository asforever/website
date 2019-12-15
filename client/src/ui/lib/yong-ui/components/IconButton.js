import React, {useState} from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import ThrottleButton from "./ThrottleButton";
import {createStyles} from "../util";

let useStyles = createStyles((theme) => ({
    iconButton: {
        width: `1em`,
        height: `1em`,
        padding: `2px`,
        '&:hover': {
            fill: `#1a1f6e`,
        }
    },
}));

function _IconButton(props) {
    const classes = useStyles();
    const className = clsx([classes.iconButton, props.className]);
    const {onClick, icon} = props;

    return (<div onClick={onClick}
                 children={icon}
                 className={className}>
    </div>);
}

const IconButton = ThrottleButton(_IconButton);
IconButton.propTypes = {
    icon: PropTypes.object.isRequired
}
export default IconButton;
