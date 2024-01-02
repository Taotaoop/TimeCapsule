var express = require("express");
var router = express.Router();

router.post("/createuser", function (req, res) {

 var storeData =
   "INSERT INTO user (name, email) VALUES (?,?)";
 var storeData_Params = [
   req.body.user.name,
   req.body.user.email,
 ];
 db.query(storeData, storeData_Params, (err) => {
   if (err) {
     res.send(err);
   }
 });
  const usetest = "select * from user";
  db.query(usetest, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
  
});

module.exports = router;

