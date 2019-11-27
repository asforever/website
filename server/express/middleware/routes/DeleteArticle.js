const express = require('express');
const {Article} = require('../../../mongoose');

const router = express.Router();
router.delete('/article', (req, res, next) => {

    const {title, category} = req.body;
    if (category) {
        if(title){
            Article.deleteOne({title: title}).then(r => {
                res.send(r);
            }).catch(e => {
                res.send(e);
            })
        }else{
            Article.deleteMany({category: category}).then(r => {
                res.send(r);
            }).catch(e => {
                res.send(e);
            })
        }
    }else {
        res.end();
    }


});

module.exports = router;
