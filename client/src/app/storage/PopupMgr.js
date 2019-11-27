export class PopupMgr {
    static SAVE_ARTICLE_POPUP = 0;
    static MSG_POPUP = 1;

    constructor() {
        this.reset();
    }

    reset(type) {
        if (type !== undefined) this.popupContainer[type] = [];

        this.popupContainer = {
            [PopupMgr.SAVE_ARTICLE_POPUP]: [],
            [PopupMgr.MSG_POPUP]: [],
        };
    }

    addPopup(type, data) {
        let container = this.popupContainer;
        container[type].push(data);
        if(container[PopupMgr.MSG_POPUP].length>=3)container[PopupMgr.MSG_POPUP].shift();
    }

    deletePopup(type) {
        this.popupContainer[type].shift();
    }

    clone() {
        const result = new PopupMgr();
        result.popupContainer = Object.assign({}, this.popupContainer);
        return result;
    }


}
