import React, {useState} from "react";
import PropTypes from "prop-types";
import {createStyles} from "../../util";
import clsx from "clsx";

const useStyles = createStyles((theme) => ({
    container: {
        display: `flex`,
        justifyContent: `center`,
        width: `100vw`,
        backgroundColor: `#fafbfc`,
        borderBottom: `1px solid #e1e4e8`,
        cursor: `pointer`,
    },
    navContainer: {
        userSelect: `none`,
        display: `block`,
        paddingTop: "3em",
        position: `relative`,
        top: `1px`,
    },
    list: {
        padding: `7px 12px 8px`,
        color: `#586069`,
        border: `1px solid transparent`,
        borderTop: `3px solid transparent`,
        float: `left`,
    },
    listActive: {
        backgroundColor: `#fff`,
        border: `1px solid #e1e4e8`,
        borderTop: `3px solid #e36209`,
        borderRadius: `3px 3px 0 0`,
        borderBottom: `1px solid transparent`,
    }
}));

function TopNav(props) {
    const classes = useStyles();
    const {onClick, lists, defaultIndex} = props;
    const [activeIndex, setActiveIndex] = useState(defaultIndex || 0);

    const handleClick = (list, key) => {
        return function (evt) {
            setActiveIndex(key);
            if (onClick) onClick(evt, list, key)
        }
    };

    return (
        <div className={classes.container}>
            <nav className={classes.navContainer}>
                {lists.map((list, key) => {
                    let classNameList = clsx([classes.list, activeIndex === key && classes.listActive]);
                    return <span
                        className={classNameList}
                        key={list.name}
                        onClick={handleClick(list, key)}
                    >
                        {list.name}
                    </span>
                })}

            </nav>
        </div>
    )
}

TopNav.propTypes = {
    lists: PropTypes.array,//Array<{name}>
    defaultIndex: PropTypes.number,
    onClick: PropTypes.func,
};

export default TopNav;
