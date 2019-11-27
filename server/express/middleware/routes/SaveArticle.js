const express = require('express');
const {Article} = require('../../../mongoose');

const router = express.Router();
router.post('/save_article', async (req, res, next) => {

    const {title, summary, content, category} = req.body;
    if (!title || !summary || !content || !category) {
        res.writeHead(400, ' Bad Request', {'content-type': 'text/plain'});
        res.end();
        return;
    }

    const article = await Article.findOne({title: title}).catch((v, err) => {
        if (err) {
            res.end();
            console.error(err);
        }
    });

    if (article) {
        article.summary = summary;
        article.content = content;
        article.category = category;
        await article.save();
    } else {
        Article.create({title: title, summary: summary, content: content, category: category});
    }
    res.send(Article);
});

module.exports = router;
