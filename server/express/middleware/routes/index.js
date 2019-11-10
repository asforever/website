const express = require("express");
const Root = require('./Root');
const SaveArticle = require('./SaveArticle');
const Article = require('./Article');
const ArticleCategory = require('./ArticleCategory');

const router = express.Router();
router.get('*', (req, res, next) => {
    next();
});
router.use(Root);
router.use(SaveArticle);
router.use(Article);
router.use(ArticleCategory);

module.exports = router;
