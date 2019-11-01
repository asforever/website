import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import router from "../../router/router";
import HomeCSS from "./Home.css";

class HomePage extends React.Component {

    render() {
        const routerLink = router.children.map((list, key) => {
            if (!list.component || list.name === "home"|| list.name === "blogEditor") return;
            return <li key={key}><Link to={list.path}>{list.path}</Link></li>
        });
        return <div className={HomeCSS.container}>{routerLink}</div>

    }
}

export default withRouter(connect()(HomePage));

