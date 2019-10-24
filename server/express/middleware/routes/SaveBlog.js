const express = require('express');
const {Blog} = require('../../../mongoose');

const router = express.Router();
/* GET users listing. */
router.post('/save_blog', (req, res, next) => {
    Blog.create({title:"test detail 1",summary:"summary detail 1",content:"content detail 1"})
    res.end();
});

module.exports = router;
