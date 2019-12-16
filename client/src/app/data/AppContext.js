import storageMgr from "./store/storageMgr";

class AppContext {
    constructor() {
        this.storageMgr = storageMgr;
        this.mediators = {};
    }

    registerMediator(mediator) {
        mediator.events.forEach(event=>{
            this.mediators[event.type] = mediator;
        });
    }
}

export default AppContext;
