import React, {useState} from "react";
import PropTypes, {func} from "prop-types";

let timer = null;

function ThrottleButton(WrapComponent) {

    return function (props) {
        const {onClick} = props;
        const _handleClick = (evt) => {
            evt.preventDefault();
            if (timer) return;
            if (onClick) onClick(evt);
            timer = setTimeout(() => {
                timer = null
            }, 100);
        };
        return React.createElement(WrapComponent, {...props, onClick: _handleClick});

    }
}

export default ThrottleButton;
