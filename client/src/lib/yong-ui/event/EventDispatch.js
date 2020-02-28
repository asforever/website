export default class EventDispatch {
    constructor() {
        this._evtMap = {};
    }

    subscribe(type, fn) {
        if (!this._evtMap[type]) this._evtMap[type] = [];
        this._evtMap[type].push(fn);
    }

    unSubscribe(type) {
        const evtMap = this._evtMap;
        delete evtMap[type];
    }


    dispatch(evt) {
        if (!this._evtMap[evt.type]) return;
        this._evtMap[evt.type].forEach(fn => {
            fn(evt);
        });
    }
}
