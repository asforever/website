const Connect = require("./connect/Connect") ;

class MongooseApp {
    static getInstance() {
        if (!MongooseApp._ins) MongooseApp._ins = new MongooseApp();
        return MongooseApp._ins;
    }

    constructor(){
        this.connect = new Connect();
    }

    async start(config){
        await this.connect.run(config.url);
    }

}


module.exports = MongooseApp;
