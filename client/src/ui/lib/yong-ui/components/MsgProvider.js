import React, {useState} from "react";
import clsx from "clsx";
import {createStyles} from "../util";
import PropTypes from "prop-types";

let useStyles = createStyles((theme) => ({
    container: {
        display: `flex`,
        flexDirection: `column`,
    },
}));

function MsgBox(props) {
    const classes = useStyles();
    let {lists, setLists} = useState([]);
    return (<div  {...props} className={classes.container}>
        {lists.map(msg=><p>{msg}</p>)}
    </div>)
}

MsgBox.propTypes = {
    maxNum: PropTypes.number,
}
export default MsgBox;
