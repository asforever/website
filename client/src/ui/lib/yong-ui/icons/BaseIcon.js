import React from "react";
import clsx from "clsx";

import {createStyles} from "../util";

let useStyles = createStyles((theme) => ({
    Icon: {
        width: `1em`,
        height: `1em`,
        '&:hover': {
            fill: '#6f70eb',
        }
    },
    iconActive: {
        width: `1em`,
        height: `1em`,
        fill: '#f90300',
        stroke: `black`,
        strokeWidth: `2`
    },
}));

export function BaseIcon(Svg) {
    return function (props) {
        const {isActive} = props;
        const classes = useStyles();
        const className = clsx([classes.Icon, isActive && classes.iconActive, props.className]);

        return React.createElement(Svg, {className: className});
    }
}
