const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/user', (req, res, next) => {
    const user = req.body.user || {};
    const username = user.username || req.cookies.username;
    const password = user.password || req.cookies.password;

    if (username === "zwy" && password === "zwypassword") {
        res.cookie('username', username, {maxAge: 900000});
        res.cookie('password', password, {maxAge: 900000});
        res.send({username: username});
    } else {
        res.cookie('username', "");
        res.cookie('password', "");
        res.end();
    }
});

module.exports = router;