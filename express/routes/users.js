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
 email=queryuserid();
 res.send(email);
//查询用户id
});

router.get("/userlist",function(req,res){
  const usetest = "select * from user limit 100";
  db.query(usetest, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});



function queryuserid(email) {
  var storeData = "SELECT if from user where email=" + email;
  db.query(storeData, (err, user) => {
    if (err) {
      return err;
    } else {
      return user;
    }
  });
}


module.exports = router;

