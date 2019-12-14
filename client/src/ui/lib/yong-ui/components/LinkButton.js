import React, {useState} from "react";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import ThrottleButton from "./ThrottleButton";
import clsx from "clsx";


function LinkButton(props) {
    const {onClick, children} = props;
    const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
    const className = clsx([presetSheet.classes.link, props.className]);

    return (<a href="#"
               children={children}
               className={className}
               onClick={onClick}>
    </a>)
}


export default ThrottleButton(LinkButton);
