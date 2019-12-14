import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import Typography from "../lib/yong-ui/components/Typography";

const useStyles = createStyles((theme) => ({
    logoContainer: {
        margin: `1.5em 0em 2.5em 0em`,
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
