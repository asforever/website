import React from "react";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import clsx from "clsx";

export function BaseIcon(Svg) {
    return function (props) {
        const {className, isActive} = props;
        const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
        const _className = clsx([presetSheet.classes.Icon, isActive && presetSheet.classes.iconActive, className]);
        return React.createElement(Svg, {className: _className});
    }
}
