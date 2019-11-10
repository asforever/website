const express = require('express');
const {Article} = require('../../../mongoose');

const router = express.Router();
router.get('/article_category', (req, res, next) => {
    Article.aggregate([
        {$group: {_id: "$category"}},
        {$project: {_id: 0, category: "$_id"}}
    ]).then(result => {
        res.send(result);
    }).catch((v, err) => {
        res.send(err);
    });
});

module.exports = router;
