import React from "react";
import styles from "./LayoutComponent.css";

function LayOutComponent({top = "top", bottom = "bottom", left = "left", main = "main"} = {}) {
    let list = [];
    if (top) list.push(<div className={styles.top} key="top">{top}</div>);
    if (left) list.push(<div className={styles.left} key="left">{left}</div>);
    if (main) list.push(<div className={styles.main} key="main">{main}</div>);
    if (bottom) list.push(<div className={styles.bottom} key="bottom">{bottom}</div>);
    return (
        <div>{list}</div>
    )
}

export default LayOutComponent;
