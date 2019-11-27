const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const router = require("./routes");
const path = require("path");
const {crossOrigins} = require("../../config");

const headerMid = (req, res, next) => {
    const origin = req.headers.origin;
    if (crossOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

class Middleware {
    constructor() {
        this.isRun = false;
    }

    run(server) {
        if (!server || this.isRun) return;
        this.isRun = true;
        server.use(headerMid);
        server.use(express.static(path.resolve(__dirname, "../static/dist")));
        server.use(express.static(path.resolve(__dirname, "../static/resource")));
        server.use(cookieParser());
        server.use(bodyParser());
        server.use(session({secret: 'keyboard cat'}));
        server.use(router);

    }
}

module.exports = Middleware;
