const config = require("./config");
const MongooseApp = require("./mongooseApp");
const ExpressApp = require("./expressApp");

const main = (async () => {
    const mongodbConfig = config.mongodb;
    let mongooseApp = MongooseApp.getInstance();
    await mongooseApp.start(mongodbConfig);

    let expressApp = ExpressApp.getInstance();
    await expressApp.start(config);

});
main().then(() => console.log("start server success"));


