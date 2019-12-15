const express = require('express');
const {Article} = require('../../../mongoose');

const router = express.Router();
router.delete('/article/:category*?/:title*?', (req, res, next) => {
    const {title, category} = req.params;
    if (category) {
        if (title) {
            Article.deleteOne({title: title}).then(r => {
                res.send(r);
            }).catch(e => {
                res.send({error:e});
            })
        } else {
            Article.deleteMany({category: category}).then(r => {
                res.send(r);
            }).catch(e => {
                res.send({error:e});
            })
        }
    } else {
        res.send({error:"参数错误"});
    }


});

module.exports = router;
