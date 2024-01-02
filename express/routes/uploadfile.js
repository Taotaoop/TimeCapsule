var express = require("express");
var router = express.Router();
var multer = require("multer");

router.post("/file-upload", uploadFile, (req, res) => {
  res.send("sucess");
});

function uploadFile(req, res, next) {
  var fileFullName;
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./file");
    },

    filename: function (req, file, cb) {
      file.originalname = Buffer.from(file.originalname, "latin1").toString(
        "utf8"
      );
      var fileFormat = file.originalname.split(".");
      fileFullName =
        file.originalname.split(".")[0] +
        "-" +
        Date.now() +
        "." +
        fileFormat[fileFormat.length - 1];
      cb(null, fileFullName);
    },
  });

  let upload = multer({
    storage: storage,
  }).any();

  upload(req, res, (err) => {
    if (err) {
      res.send("err:" + err);
    } else {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.send(fileFullName);
    }
  });
}

module.exports = router;
