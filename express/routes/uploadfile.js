var express = require("express");
var router = express.Router();
var multer = require("multer");
const fs = require("fs");
let path = require("path");

/* ��??��???�� */
router.post("/file-upload", uploadFile, (req, res) => {

  res.send("�ļ��ϴ��ɹ�");
});

function uploadFile(req, res, next) {

    var storage = multer.diskStorage({
      //�����ϴ����ļ�·����uploads�ļ��л��Զ�������
      destination: function (req, file, cb) {
        cb(null, "./file");
      },
      //���ϴ��ļ�����������ȡ��Ӻ�׺��
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
    //��ӡ���������Ľ�ͼ
    console.log(req.files[0]);
    if (err) {
      res.send("err:" + err);
    } else {
      next();
    }
  });
}

module.exports = router;
