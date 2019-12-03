import React, {useState} from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

let timer = null;

function BaseButton(props) {
    const {onClick, children, activeClassName, baseClassName, className, listTag = "div"} = props;
    const [active, setActive] = useState(false);

    function onMouseDown(evt) {
        evt.preventDefault();
        if (timer) return;
        setActive(true);
    }

    function onMouseUp(evt) {
        evt.preventDefault();
        if (!active) return;
        setActive(false);
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
        }, 100);
        if (onClick) onClick();

    }

    const resultClassName = clsx([baseClassName, active && activeClassName, className]);
    return (<div children={children}
                 onMouseDown={onMouseDown}
                 onMouseUp={onMouseUp}
                 onMouseOut={onMouseUp}
                 className={resultClassName}>
    </div>)
}

BaseButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    baseClassName: PropTypes.string.isRequired,
    activeClassName: PropTypes.string.isRequired,
    listTag: PropTypes.string,
};

export {BaseButton};
