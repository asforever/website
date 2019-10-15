const Connect = require("./connect/Connect");
const Middleware = require("./middleware/Middleware");

class ExpressApp {

    static getInstance() {
        if (!ExpressApp._ins) ExpressApp._ins = new ExpressApp();
        return ExpressApp._ins;
    }

    constructor() {
        this.middleware = new Middleware();
        this.connect = new Connect();
    }

    async start(config) {
        const server = await this.connect.run(config.port);
        this.middleware.run(server);
    }
}

module.exports = ExpressApp;
