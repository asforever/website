import React from "react";
import clsx from "clsx";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";

function List(props) {
    const {children} = props;
    const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
    const className = clsx([presetSheet.classes.list, props.className]);
    return (<div children={children} className={className}>
    </div>)
}

export {List};
