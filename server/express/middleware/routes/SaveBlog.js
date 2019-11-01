const express = require('express');
const {Blog} = require('../../../mongoose');

const router = express.Router();
router.post('/save_blog', async (req, res, next) => {

    const {title, summary, content, category} = req.body;
    if (!title || !summary || !content || !category) {
        res.writeHead(400, ' Bad Request', {'content-type': 'text/plain'});
        res.end();
        return;
    }

    const blog = await Blog.findOne({title: title}).catch((v, err) => {
        if (err) {
            console.error(err)
        }
    });

    if (blog) {
        blog.summary = summary;
        blog.content = content;
        blog.category = category;
        await blog.save();
    } else {
        Blog.create({title: title, summary: summary, content: content, category: category});
    }
    res.end();
});

module.exports = router;
