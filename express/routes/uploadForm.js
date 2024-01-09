var express = require("express");
var router = express.Router();

//上传表单
router.post("/uploadform", function (req, res) {
  

  if (req.body.fileList.length > 0) {
    req.body.fileList.forEach((element) => {
      var storeData =
        "INSERT INTO file (id,name,time, email,capsuleText, filepath) VALUES (0,?,?,?,?,?)";
      var storeData_Params = [
        req.body.user.name,
        new Date(req.body.user.publishDate),
        req.body.user.email,
        req.body.user.capsuleText,
        "./file/" + element,
      ];
      db.query(storeData, storeData_Params, (err,user) => {
        if (err) {
          res.send(err);
        } else {
          res.send({code:200,message:"Upload Successful"});
        }
      });
    });
  } else {
    var storeData =
      "INSERT INTO file (id, name, time, email, capsuleText, filepath) VALUES (0, ?, ?, ?, ?, ?)";
    var storeData_Params = [
      req.body.user.name,
      new Date(req.body.user.publishDate),
      req.body.user.email,
      req.body.user.capsuleText,
      "",
    ];
    db.query(storeData, storeData_Params, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.send({code:200,message:"Upload Successful"});
      }
    });
  }
  
});

//获取timeline 的数据，50条
router.get("/gettimeline", function (req, res) {
  var storeData =
    "SELECT time, filepath,capsuleText FROM file ORDER BY time limit 50";
  db.query(storeData, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      user.forEach((element) => {
        element.uid = 0;
      });
      res.send(user);
    }
  });
});

//获取所有的文件列表,100条
router.get("/filelist", function (req, res) {
  const usetest = "select * from file limit 100";
  db.query(usetest, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

module.exports = router;
