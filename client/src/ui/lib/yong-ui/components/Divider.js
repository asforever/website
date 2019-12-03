import React, {useState} from "react";
import clsx from "clsx";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import PropTypes from "prop-types";

function Divider(props) {
    const {children} = props;
    const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
    const classes = presetSheet.classes;
    const className = clsx([classes.dividerHor, props.className]);

    return (<div children={children}
                 className={className}>
    </div>)
}

export {Divider};
