var express = require('express');
var router = express.Router();
var userCtl = require('../controllers/user'); //user���Ʋ�

/* ע���û� */
router.get('/', function(req, res, next) {
    const userNameIsOnlySql = `select * from user`;
    db.query(userNameIsOnlySql, function (err, res, req) {
      if (err) {
        res.send(err);
      } else {
        res.send(res);
      }
    });

    
})

module.exports = router;

