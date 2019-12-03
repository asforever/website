import presetTheme from "../state/presetTheme"
import stateManager from "../state/stateManager";

function createStyles(callback) {
    const styles = callback(presetTheme);
    const sheet = stateManager.parseStyles(Symbol(), styles);
    return () => {
        return sheet.classes;
    }
}

export {createStyles};
