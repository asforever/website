const express = require('express');
const {Blog} = require('../../../mongoose');

const router = express.Router();
router.get('/blogCategory', (req, res, next) => {
    Blog.aggregate([
        {$group: {_id: "$category"}},
        {$project: {_id: 0, category: "$_id"}}
    ]).then(result => {
        res.send(result);
    }).catch((v, err) => {
        res.send(err);
    });
});

module.exports = router;
