import React, {useState} from "react";
import clsx from "clsx";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import PropTypes from "prop-types";
import {BaseButton} from "./BaseButton";

function ListButtonHoc(WrapComponent) {
    return function (props) {
        const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
        const classes = presetSheet.classes;
        const {className, onClick, children} = props;
        const baseClassName = classes.listButton;
        const activeClassName = classes.listButtonActive;
        return (<WrapComponent {...{className, baseClassName, activeClassName, children, onClick}} >
        </WrapComponent>)
    }
}


const ListButton = ListButtonHoc(BaseButton);
ListButton.propTypes = {
    onClick: PropTypes.func,
};
export {ListButton};
