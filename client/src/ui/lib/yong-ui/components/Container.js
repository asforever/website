import React from "react";
import clsx from "clsx";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";

function Container(props) {
    const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
    const className = clsx([presetSheet.classes.container, props.className]);

    return (<div  {...props} className={className}>
    </div>)
}

export {Container};
