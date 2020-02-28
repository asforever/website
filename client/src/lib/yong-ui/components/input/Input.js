import React, {useState} from "react";
import PropTypes from "prop-types";
import {createStyles} from "../../util";
import clsx from "clsx";

const useStyles = createStyles((theme) => ({
    input: {
        height: `1.5em`,
        width: `3em`,
        margin: 0,
        outline: 0,
    }
}));

export default function Input({onChange, value, min = 0, max = 100, className}) {
    const classes = useStyles();
    const _className = clsx([classes.input, className]);
    const handleChange = (evt) => {
        if (onChange) onChange(evt);
    };

    return <input
        className={_className}
        onChange={handleChange}
        type="number"
        min={min} max={max}
        value={value}/>
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
};