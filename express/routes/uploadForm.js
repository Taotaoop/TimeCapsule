var express = require("express");
var router = express.Router();

router.post("/uploadform", function (req, res) {
  req.body.fileList.forEach((element) => {
    var storeData =
      "INSERT INTO file (id,name, email,capsuleText, filepath) VALUES (0,?,?,?,?)";
    var storeData_Params = [
      req.body.user.name,
      req.body.user.email,
      req.body.user.capsuleText,
      "./file/" + element,
    ];
    db.query(storeData, storeData_Params, (err) => {
      if (err) {
        res.send(err);
      }
    });
  });

  const usetest = "select * from file";
  db.query(usetest, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      console.log(user);
      res.send(user);
    }
  });
});
router.get("/getlist", function (req, res) {
  var storeData =
    "SELECT time, filepath,capsuleText FROM file ORDER BY time limit 50";

  db.query(storeData, (err, user) => {
    if (err) {
      res.send(err);
    }else{
      user.forEach((element) => {
        element.uid=0;
      });
      res.send(user);
    }
  });
});

module.exports = router;
