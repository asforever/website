const express = require("express");
const Root = require('./Root');
const SaveBlog = require('./SaveBlog');
const Blog = require('./Blog');
const BlogCategory = require('./BlogCategory');

const router = express.Router();
router.get('*', (req, res, next) => {
    next();
});
router.use(Root);
router.use(SaveBlog);
router.use(Blog);
router.use(BlogCategory);

module.exports = router;
