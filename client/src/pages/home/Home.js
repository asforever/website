import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import router from "../../router/router";

class Home extends React.Component {
    render() {
        return router.children.map((list, key) => {
            if (!list.component||list.name==="home") return;
            return <li key={key}><Link to={list.path}>{list.path}</Link></li>
        })
    }
}

export default withRouter(connect()(Home));

