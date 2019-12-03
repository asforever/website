import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import {Typography} from "../lib/yong-ui/components/Typography";

const useStyles = createStyles((theme) => ({
    logoContainer: {
        marginBottom: `2em`,
    }
}));

function LogoBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.logoContainer}>
            <Typography variant="h1">Webgl</Typography>
            <Typography variant="h3">one piece</Typography>
        </div>
    )
}

export default LogoBar;
