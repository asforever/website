const express = require('express');
const {Blog} = require('../../../mongoose');

const router = express.Router();
/* GET users listing. */
router.get('/blog', async (req, res, next) => {
/*    await Blog.deleteMany({}).catch((v, err) => {
        if (err) {
            console.error(err)
        }
    });*/
    const blog = await Blog.find().catch((v, err) => {
        if (err) {
            console.error(err)
        }
    });
    res.send(blog);
});

module.exports = router;
