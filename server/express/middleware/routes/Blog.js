const express = require('express');
const {Blog} = require('../../../mongoose');

const router = express.Router();
router.get('/blog/:category', async (req, res, next) => {

    const blog = await Blog.find({category: req.params.category}).catch((v, err) => {
        if (err) {
            console.error(err)
        }
    });
    res.send(req.params);
});

module.exports = router;
