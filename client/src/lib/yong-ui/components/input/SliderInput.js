import React, {useState} from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";
import Input from "./Input";
import {createStyles} from "../../util";
import clsx from "clsx";

const useStyles = createStyles((theme) => ({
    container: {
        display: `flex`,
        justifyContent: `space-between`,
        padding: `2px`,
        borderBottom: `1px solid #e1e4e8`,
        background: `#fafbfc`,
    },
    right: {
        display: `flex`,
    },
    title: {
        margin: `2px`,
        width: `max-content`,
    },
}));


export default function SliderInput({
                                        onChange, title,
                                        min = 0, max = 100,
                                        value = 0, className
                                    }) {
    const classes = useStyles();
    const containerClassName = clsx([classes.container, className]);

    const [_value, setValue] = useState(value);

    const handleChange = (evt) => {
        setValue(Number(evt.target.value));
        if (onChange) onChange(evt);
    };

    return <div className={containerClassName}>
        <div className={classes.title}>{title}</div>
        <div className={classes.right}>
            <Slider onChange={handleChange} value={_value} min={min} max={max}/>
            <Input onChange={handleChange} value={_value} min={min} max={max}/>
        </div>
    </div>

}

SliderInput.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.number,
};