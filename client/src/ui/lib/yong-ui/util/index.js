import presetTheme from "../state/presetTheme"
import stateManager from "../state/stateManager";
import React from "react";
import CloseSvg from "../icons/svg/close.svg";

function createStyles(callback) {
    const styles = callback(presetTheme);
    const sheet = stateManager.parseStyles(Symbol(), styles);
    return () => {
        return sheet.classes;
    }
}

export {createStyles};
