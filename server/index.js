const config = require("./config");
const mongooseApp = require("./mongooseApp");
const expressApp = require("./expressApp");

const main = (async () => {
    let connect = new mongooseApp.Connect();
    await connect.run(config.mongodb.url);

    let serverConnect = new expressApp.Connect();
    let server = await serverConnect.run(config.port);
    new expressApp.Middleware().run(server);

});
main().then(() => console.log("start server success"));


