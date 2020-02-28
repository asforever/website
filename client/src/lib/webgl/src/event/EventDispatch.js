export default class EventDispatch {
    static create() {
        return new EventDispatch();
    }

    constructor() {
        this.listens = {};
    }

    addEventListen(type, callback) {
        if (typeof callback !== "function") return;
        this.listens[type] = this.listens[type] || [];
        this.listens[type].push(callback);
    }

    dispatch(type) {
        let listens = this.listens[type];
        if (!listens) return;
        listens.forEach(callback => {
            callback();
        });
    }
}