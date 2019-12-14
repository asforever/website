export default class Mediator {
    constructor() {
        this.events = this.registerEvents();
    }

    registerEvents() {
        return [];
    }

    dispatch(type, params) {

    }
}