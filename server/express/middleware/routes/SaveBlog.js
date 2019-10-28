const express = require('express');
const {Blog} = require('../../../mongoose');

const router = express.Router();
/* GET users listing. */
router.post('/save_blog', async (req, res, next) => {
    const {title, summary, content, category} = req.body.data;
    let blog = await Blog.findOne({title: title}).catch((v, err) => {
        if (!err) {
            console.log(v)
        } else {
            console.error(err)
        }
    });
    if (blog) {
        blog.summary = summary;
        blog.content = content;
        blog.category = category;
    } else {
        Blog.create({title: title, summary: summary, content: content, category: category});
    }
    res.end();
});

module.exports = router;
