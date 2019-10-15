import React from "react";
import LayOutComponent from "../../component/layout/LayoutComponent";
import Head from "./Head";
import Category from "./Category";

export default class Blog extends React.Component {
    render() {
        const top = <Head/>;
        const left = <Category/>;
        return (
            <LayOutComponent top = {top} left={left}></LayOutComponent>
        )
    }
}
