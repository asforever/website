import React from "react";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";

function Container(props) {
    const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
    return (<div className={presetSheet.classes.container} {...props} >
    </div>)
}

export {Container};
