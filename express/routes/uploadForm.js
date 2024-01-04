var express = require("express");
var router = express.Router();


//上传表单
router.post("/uploadform", function (req, res) {
  req.body.fileList.forEach((element) => {
    var storeData =
      "INSERT INTO file (id,name, email,time,capsuleText, filepath) VALUES (0,?,?,?,?)";
    var storeData_Params = [
      req.body.user.name,
      req.body.user.email,
      req.body.user.time,
      req.body.user.capsuleText,
      "./file/" + element,
    ];
    db.query(storeData, storeData_Params, (err) => {
      if (err) {
        res.send(err);
      }
    });
  });
});

//获取timeline 的数据，50条
router.get("/gettimeline", function (req, res) {
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

//获取所有的文件列表,100条
router.get("/filelist",function(req,res){
  const usetest = "select * from file limit 100";
  db.query(usetest, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      console.log(user);
      res.send(user);
    }
  });
});


module.exports = router;
