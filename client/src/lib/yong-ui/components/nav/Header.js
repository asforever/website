import React from "react";
import {createStyles} from "../../util";

const useStyles = createStyles((theme) => ({
    container: {
        display: `flex`,
        width: `100vw`,
        height: `1.5em`,
        paddingTop: `1em`,
        paddingBottom: `1em`,
        backgroundColor: `#24292e`,
    },

}));

function Header(props) {
    const classes = useStyles();
    const {children} = props;

    return (
        <div children={children} className={classes.container}/>
    )
}

Header.propTypes = {};

export default Header;
