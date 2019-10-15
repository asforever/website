import React from "react";
import styles from "./LayoutComponent.module.css";
console.log(styles);
function LayOutComponent({top = "top", bottom = "bottom", left = "left", main = "main"} = {}) {
    let list = [];
    if (top) list.push(<div className={styles.top} key="top">{top}</div>);
    if (left) list.push(<div key="left" style={{float: "left"}}>{left}</div>);
    if (main) list.push(<div key="main">{main}</div>);
    if (bottom) list.push(<div key="bottom">{bottom}</div>);
    return (
        <div>{list}</div>
    )
}

export default LayOutComponent;
