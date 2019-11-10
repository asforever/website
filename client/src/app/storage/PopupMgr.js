export class PopupMgr {
    static SAVE_ARTICLE_POPUP = 0;
    static MSG_POPUP = 1;

    constructor() {
        this.init();
    }

    init() {
        this.popupContainer = {
            [PopupMgr.SAVE_ARTICLE_POPUP]: [],
            [PopupMgr.MSG_POPUP]: [],
        };
    }

    addPopup(type, data) {
        this.popupContainer[type].push(data);
    }

    deletePopup(type) {
        this.popupContainer[type].shift();
    }

    clone() {
        const result = new PopupMgr();
        result.popupContainer = this.popupContainer;
        return result;
    }


}
