import React, {useMemo} from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext(null);

function ThemeProvider(props) {
    const {theme, children} = props;

    return React.createElement(ThemeContext.Provider, {
        value: theme
    }, children);
}

ThemeProvider.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.any
};

export default ThemeProvider;
