const express = require('express');
const {Blog} = require('../../../mongoose');

const router = express.Router();
/* GET users listing. */
router.get('/blog', (req, res, next) => {
    Blog.find().then(v => {
        res.send(v);
    });
});

module.exports = router;
