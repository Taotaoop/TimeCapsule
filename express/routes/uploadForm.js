var express = require("express");
var router = express.Router();

router.post("/uploadform", function (req, res,) {
  console.log("i'm here");
  console.log(req);
  console.log("done");
  console.log(req.body);
  console.log(req.params);
  console.log(req.params);
  res.send("x");

  //   const storeData = `select * from user`;
  //   db.query(storeData, (err) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.send("sucess");
  //     }
  //   });
});

module.exports = router;
