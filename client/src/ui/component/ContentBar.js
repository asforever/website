import React from "react";
import PropTypes from "prop-types";
import {createStyles} from "../lib/yong-ui/util";


const useStyles = createStyles((theme) => ({
    contentContainer: {
        display: `flex`,
        justifyContent: `space-between`,
        width: `100%`,
        marginTop: `1em`,
    },
    leftContainer: {
        padding: `1em`,
        width: `60%`,
    },
    rightContainer: {
        width: `15em`,
        padding: `1em`,
        borderLeft: `1px Dashed #ccc`,
    },
}));

function ContentBar(props) {
    const classes = useStyles();
    const {leftBar, rightBar} = props;

    const leftBarDom = leftBar();
    const rightBarDom = rightBar();
    return (
        <div className={classes.contentContainer}>
            <div className={classes.leftContainer}>
                {leftBarDom}
            </div>
            <div className={classes.rightContainer}>
                {rightBarDom}
            </div>
        </div>
    )
}

ContentBar.propTypes = {
    leftBar: PropTypes.func.isRequired,
    rightBar: PropTypes.func.isRequired
};

export default ContentBar;
