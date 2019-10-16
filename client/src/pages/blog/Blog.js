import React from "react";
import LayOutComponent from "../../component/layout/LayoutComponent";
import Head from "./Head";
import Category from "./Category";
import BlogCSS from "./Blog.css";

export default class Blog extends React.Component {
    render() {
        const top = <Head/>;
        const left = <Category/>;
        const main = <div>main</div>;
        const bottom = <div>bottom</div>;
        const className = BlogCSS.container;

        return (
            <LayOutComponent  {...{className, top, left, main, bottom}}></LayOutComponent>
        )
    }
}
