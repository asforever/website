import React from "react";
import styles from "./LayoutComponent.css";

function LayOutComponent(props) {
    let list = [];
    if (props.top) list.push(<div className={styles.top} key="top">{props.top}</div>);
    if (props.left) list.push(<div className={styles.left} key="left">{props.left}</div>);
    if (props.main) list.push(<div className={styles.main} key="main">{props.main}</div>);
    if (props.bottom) list.push(<div className={styles.bottom} key="bottom">{props.bottom}</div>);
    return (
        <div className={props.className}>{list}</div>
    )
}

export default LayOutComponent;
