import React, {useState} from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import ThrottleButton from "./ThrottleButton";

function _IconButton(props) {
    const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
    const className = clsx([presetSheet.classes.iconButton, props.className]);
    const {onClick, icon} = props;

    return (<div onClick={onClick}
                 children={icon}
                 className={className}>
    </div>);
}

const IconButton = ThrottleButton(_IconButton);
IconButton.propTypes = {
    icon: PropTypes.object.isRequired
}
export default IconButton;
