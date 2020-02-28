import React, {useEffect} from "react";
import {createStyles} from "../../lib/yong-ui/util";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


let useStyles = createStyles((theme) => ({
    container: {
        padding: `1em`,
    },
}));

const canvas = document.createElement("canvas");
canvas.style.width = "100%";
canvas.style.height = "40em";

function ExamplePage(props) {
    const classes = useStyles();

    return (<div className={classes.container}>
        <Link target="_blank" to={"/webglView/Phong"}>2020-2-1</Link>
    </div>)
}

const mapStateToProps = (state, ownProps) => {
    return {}
};

export default connect(mapStateToProps)(ExamplePage);
