var express = require('express');
var router = express.Router();
var userCtl = require('../controllers/user'); //user���Ʋ�

/* ע���û� */
router.get("/", function (req, res) {
  const userNameIsOnlySql = `select * from user`;
  db.query(userNameIsOnlySql, (err, users) => {
    if (err) {
      res.send("query error");
    } else {
      // ? MySQL ???????????
      res.send(users);
    }
  });
  
});

module.exports = router;

