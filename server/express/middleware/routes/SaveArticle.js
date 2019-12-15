const express = require('express');
const {Article} = require('../../../mongoose');

const router = express.Router();
router.post('/save_article', async (req, res, next) => {

    const {title, summary, content, category} = req.body;
    if (!title || !summary || !content || !category) {
        //res.writeHead(400, ' Bad Request', {'content-type': 'text/plain'});
        res.send({error: "参数错误"});
        return;
    }

    let article = await Article.findOne({title: title}).catch((v, err) => {
        if (err) {
            res.send({error: "获取数据失败"});
        }
    });

    if (article) {
        article.summary = summary;
        article.content = content;
        article.category = category;
        await article.save();
    } else {
        article = await Article.create({title: title, summary: summary, content: content, category: category});
    }
    res.send(article);
});

module.exports = router;
