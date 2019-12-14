import React, {useState} from "react";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import ThrottleButton from "./ThrottleButton";
import {createStyles} from "../util";
import clsx from "clsx";

function ListButton(props) {
    const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
    const className = clsx([presetSheet.classes.listButton, props.className]);
    const {onClick, children} = props;

    return (<div onClick={onClick}
                 children={children}
                 className={className}>
    </div>);
}

export default ThrottleButton(ListButton);
