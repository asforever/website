import React from "react";
import {Link} from "react-router-dom";
import BlogCSS from "./Blog.css";

class Head extends React.Component {
    render() {
        return (
            <>
                <Link to="home">HOME</Link>
                <Link to="blogEditor" className = {BlogCSS.headRight}>EDITOR</Link>
            </>
        )
    }
}

export default Head;
