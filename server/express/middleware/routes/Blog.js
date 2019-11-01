const express = require('express');
const {Blog} = require('../../../mongoose');

const router = express.Router();
router.get('/blog/:category*?', (req, res, next) => {
    //await Blog.deleteMany({});
    let match = req.params.category ? {"category": req.params.category} : {};
    Blog.aggregate([{
        $match: match,
    }]).then(result => {
        res.send(result);
    }).catch((v, err) => {
        if (err) res.send({err: err});
    });
});

module.exports = router;
