var express = require("express");
var router = express.Router();
var multer = require("multer");

/* ��??��???�� */
router.post("/file-upload", uploadFile, (req, res) => {
  console.log(req.body);
  res.send("�ļ��ϴ��ɹ�");
});

function uploadFile(req, res, next) {
  var fileFullName
    var storage = multer.diskStorage({
      //�����ϴ����ļ�·����uploads�ļ��л��Զ�������
      destination: function (req, file, cb) {
        cb(null, "./file");
      },
      //���ϴ��ļ�����������ȡ���Ӻ�׺��
      filename: function (req, file, cb) {
        var fileFormat = file.originalname.split(".");
        fileFullName = 
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
      res.send(fileFullName);
    }
  });
}

module.exports = router;
