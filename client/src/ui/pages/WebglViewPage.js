import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {createStyles} from "../../lib/yong-ui/util";
import MiniUI from "../container/MiniUI";
import {cmdMgr} from "../../app";
import RunExampleCmd from "../../app/cmd/RunExampleCmd";


let useStyles = createStyles((theme) => ({
    canvas: {
        position: `absolute`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: `100%`,
        height: `100%`,
    },
    miniUI: {
        position: `absolute`,
        right: 0,
    }
}));

function WebglViewPage({dispatch, match}) {
    const classes = useStyles();
    const ref = React.createRef();
    const id = match.params.id;
    /*    const lists = [
            {title: "point light"},
            {title: "dir light"},
        ];*/
    useEffect(() => {
        cmdMgr.exec(new RunExampleCmd(id, ref.current));
    }, []);

    return (<>
        <canvas ref={ref} className={classes.canvas}/>
        {/*<MiniUI className={classes.miniUI} lists={lists}/>*/}
    </>)
}

export default connect()(withRouter(WebglViewPage));