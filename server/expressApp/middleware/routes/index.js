const express = require("express");
const Root = require('./Root');
const SaveBlog = require('./SaveBlog');

const router = express.Router();
router.get('*', (req, res, next) => {
    next();
    /*    if (req.isAuthenticated()) {
     } else {
     req.status = 401;
     req.body = {
     msg: 'auth fail'
     }
     }*/
});
router.use(Root);
router.use(SaveBlog);

module.exports = router;
