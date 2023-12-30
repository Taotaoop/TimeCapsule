var express = require("express");
var router = express.Router();
var multer = require("multer");
const fs = require("fs");
let path = require("path");

/* ×??á???§ */
router.post("/file-upload", uploadFile, (req, res) => {

  res.send("文件上传成功");
});

function uploadFile(req, res, next) {

    var storage = multer.diskStorage({
      //设置上传后文件路径，uploads文件夹会自动创建。
      destination: function (req, file, cb) {
        cb(null, "./file");
      },
      //给上传文件重命名，获取添加后缀名
      filename: function (req, file, cb) {
        var fileFormat = file.originalname.split(".");
        cb(
          null,
          file.originalname.split('.')[0] +
            "-" +
            Date.now() +
            "." +
            fileFormat[fileFormat.length - 1]
        );
      },
    }); 
  
  let upload = multer({
    storage: storage,
  }).any();


  upload(req, res, (err) => {
    //打印结果看下面的截图
    console.log(req.files[0]);
    if (err) {
      res.send("err:" + err);
    } else {
      next();
    }
  });
}

module.exports = router;
