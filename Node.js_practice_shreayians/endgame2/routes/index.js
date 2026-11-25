var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/failed' , function(req ,res){
  req.flash("age",12);
  req.flash("name","Sakshi");
  res.send("Flash set");
})

router.get("/check" , function(req,res){
  console.log(req.flash("age") , req.flash("name"));
  res.send("Check console");
})

module.exports = router;
