import React from "react";
import clsx from "clsx";
import stateManager from "../state/stateManager";
import presetKeys from "../state/presetKeys";
import PropTypes from "prop-types";
import ThemeProvider from "./ThemeProvider";

function Typography(props) {
    const {variant = "h3", children} = props;
    const presetSheet = stateManager.getSheet(presetKeys.PRESET_KEY);
    const className = clsx([presetSheet.classes["typography-" + variant], props.className]);
    return (<span className={className} children={children}>
    </span>)
}

Typography.propTypes = {
    variant: PropTypes.string,
};

export default Typography;
