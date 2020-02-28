import React, {useState} from "react";
import clsx from "clsx";
import {createStyles} from "../../util";

let useStyles = createStyles((theme) => ({
    container: {
        backgroundColor: " #fafbfc"
    },
    header: {
        borderBottom: `1px solid #e1e4e8`,
        padding: `5px`,
    }
}));

function MiniPanel(props) {
    const classes = useStyles();
    const {className, children} = props;
    const containerClassName = clsx([classes.container, className]);

    let [open, setOpen] = useState(false);
    return (<div className={containerClassName}>
        <div className={classes.header}>{open ? "open" : "close"}</div>
        {children}
    </div>)
}

export default MiniPanel;
