const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/save_blog', (req, res, next) => {
    console.log(req.body);
    res.send({title:"test detail",summary:"summary detail",content:"content detail"});
});

module.exports = router;
