import presetTheme from "../state/presetTheme"
import stateManager from "../state/stateManager";
import presetMsgEvent from "../state/presetMsgEvent"
import Event from "../event/Event"

function createStyles(callback) {
    const styles = callback(presetTheme);
    const sheet = stateManager.getSheet(Symbol(), styles);
    return () => {
        return sheet.classes;
    }
}

function pushMsg(msg) {
    presetMsgEvent.dispatch(new Event({type: "change", body: msg}));
}

export {createStyles, pushMsg};
