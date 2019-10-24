const express = require("express");
const Root = require('./Root');
const SaveBlog = require('./SaveBlog');
const Blog = require('./Blog');

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
router.use(Blog);

module.exports = router;
