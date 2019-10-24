const config = require("./config");
const mongoose = require("./mongoose");
const express = require("./express");

const main = (async () => {
    let connect = new mongoose.Connect();
    await connect.run(config.mongodb.url);

    let serverConnect = new express.Connect();
    let server = await serverConnect.run(config.port);
    new express.Middleware().run(server);

});
main().then(() => console.log("start server success"));


