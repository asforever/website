const express = require('express');
const { Article} = require('../../../mongoose');

const router = express.Router();
router.get('/article/:category*?', (req, res, next) => {
    //await Article.deleteMany({});
    let match = req.params.category ? {"category": req.params.category} : {};
    Article.aggregate([{
        $match: match,
    }]).then(result => {
        res.send(result);
    }).catch((v, err) => {
        if (err) res.send({err: err});
    });
});

module.exports = router;
