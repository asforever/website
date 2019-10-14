const express = require("express");
const root = require('./root');

const router = express.Router();
router.get('*', (req, res, next) => {
    next();
    /*    if (req.isAuthenticated()) {
     } else {
     req.status = 401;
     req.body = {
     msg: 'auth fail'
     }
     }*/
});
router.use(root);

module.exports = router;
