import jss from 'jss'
import camelCase from "jss-plugin-camel-case";
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import nexted from 'jss-plugin-nested'
import presetTheme from './presetTheme'

jss.use(camelCase());
jss.use(vendorPrefixer());
jss.use(nexted());

class StateManager {
    constructor() {
        this.sheets = {};
        this.theme = presetTheme;
    }

    getSheet(key,styles) {
        if (!this.sheets[key]&&styles) {
            const sheet = jss.createStyleSheet(styles);
            sheet.attach();
            this.sheets[key] = sheet;
        }
        return this.sheets[key];
    }

}

const stateManager = new StateManager();

export default stateManager;
