var express = require('express');
var router = express.Router();

/* ע���û� */
router.post("/createuser", function (req, res) {
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

