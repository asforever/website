import presetTheme from "../state/presetTheme"
import stateManager from "../state/stateManager";
import React from "react";

function createStyles(callback) {
    const styles = callback(presetTheme);
    const sheet = stateManager.getSheet(Symbol(), styles);
    return () => {
        return sheet.classes;
    }
}

export {createStyles};
