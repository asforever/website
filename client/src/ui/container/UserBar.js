import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import Typography from "../lib/yong-ui/components/Typography";
import ListButton from "../lib/yong-ui/components/ListButton";

const useStyles = createStyles((theme) => ({
    container: {
        position: `fixed`,
        width: `2em`,
        height: `8em`,
        marginLeft: "1em",
        marginTop: "-1px",
        borderRadius: `0  0 0.8em 0.8em`,
        backgroundImage: `linear-gradient(0deg, #000000 ,#aa0000 100%)`,
        color: `#f2f2f2`,
        fontSize: `0.5em`,
        textAlign: `center`,
        border: `1px solid #000000`,
    },
    list: {
        padding: `0.5em`
    }
}));

function UserBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ListButton className={classes.list}>登录</ListButton>
            <ListButton className={classes.list}>注册</ListButton>
        </div>
    )
}

export default UserBar;
