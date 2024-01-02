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
      console.log(user)
      res.send(user);
    }
  });
});

module.exports = router;
