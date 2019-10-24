const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/users', (req, res, next) => {
    console.log(req.query.id)
    res.send(req.query.id);
});

export default router
