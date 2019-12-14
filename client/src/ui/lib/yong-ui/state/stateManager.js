import jss from 'jss'
import camelCase from 'jss-plugin-camel-case';
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import nexted from 'jss-plugin-nested'

import presetStyles from './presetStyles'
import presetTheme from './presetTheme'
import presetKeys from "./presetKeys";

jss.use(camelCase());
jss.use(vendorPrefixer());
jss.use(nexted());

class StateManager {
    constructor() {
        this.sheets = {};
        this.theme = presetTheme;
        this.parsePresetStyles();
    }

    parsePresetStyles() {
        this.parseStyles(presetKeys.PRESET_KEY, presetStyles);
    }

    parseStyles(key, styles) {
        const sheet = jss.createStyleSheet(styles);
        sheet.attach();
        this.sheets[key] = sheet;
        return sheet;
    }

    getSheet(key) {
        return this.sheets[key];
    }

}

const stateManager = new StateManager();

export default stateManager;
