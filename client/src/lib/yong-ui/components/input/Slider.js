import React, {useState} from "react";
import PropTypes from "prop-types";
import {createStyles} from "../../util";
import clsx from "clsx";

const useStyles = createStyles((theme) => ({
    input: {
        height: `1.5em`,
        margin: 2,
    }
}));

export default function Slider({onChange, value, min = 0, max = 100, className}) {
    const classes = useStyles();
    const _className = clsx([classes.input, className]);

    const handleChange = (evt) => {
        if (onChange) onChange(evt);
    };
    return <input
        className={_className}
        onChange={handleChange}
        type="range" step="1"
        min={min} max={max}
        value={value}/>
}

Slider.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.number,
};