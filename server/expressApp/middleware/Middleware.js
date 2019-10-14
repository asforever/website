const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const router = require("./routes");
const path = require("path");
const {crossOrigins} = require("../../config");

const headerMid= (req, res, next) => {
    const origin = req.headers.origin;
    if (crossOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

const staticPageMid = express.static(path.resolve(__dirname, "../static/build"));
const staticResourceMid = express.static(path.resolve(__dirname, "../static/resource"));
const cookieMid = cookieParser();
const bodyMid = bodyParser();
const sessionMid = session({secret: 'keyboard cat'});

module.exports = [
    headerMid,
    staticPageMid,
    staticResourceMid,
    cookieMid,
    bodyMid,
    sessionMid,
    router
];
