var express = require('express');
var router = express.Router();

const userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// //Flash Messages
// router.get('/failed' , function(req ,res){
//   req.flash("age",12);
//   req.flash("name","Sakshi");
//   res.send("Flash set");
// })

// router.get("/check" , function(req,res){
//   console.log(req.flash("age") , req.flash("name"));
//   res.send("Check console");
// })


//INTERMEDIATE MONGODB

router.get('/create' , async function(req , res){
  let userCreated = await userModel.create({
    username:"Sumitiiii",
    nickname:"Sumixx",
    description:"I am 24 years old",
    categories:["Female" , "AI dev" , "Strong"],
    })

  res.send(userCreated);  
})

router.get('/find',async function(req,res){
  let users = await userModel.find();
  res.send(users);
})

// To do case insensitive search (find) in database we use RegExp 
router.get('/findOne',async function(req,res){
  var regex = new RegExp("^sumit$" , "i") // i is for insensitive
  let users = await userModel.find({username: regex});
  res.send(users);
})

//Find on the basis of category
router.get('/findCat',async function(req,res){
  let users = await userModel.find({categories: {$all: ['MAN']}});
  res.send(users);
})

//Find in between a range 
// router.get('/findRange' , async function(req ,res){
//   var date1 = new Date('2026-11-26');
//   var date2 = new Date('2026-11-28');

//   let users = await userModel.find({datecreated:{$gte: date1 , $lte:date2}});
//   res.send(users);
// })

//Find on the basis of existence of a field 
// router.get('/findField' , async function(req , res){
//   let users = await userModel.find({nickname:{$exists : true}});
//   res.send(users);
// })

//Find on the basis of specific field length 
router.get('/findLen' , async function(req ,res){
  let users = await userModel.find({
    $expr:{
      $and:[
        {
          $gte:[{$strLenCP: '$nickname'} , 0]
        },
        {
          $lte : [{$strLenCP:'$nickname'},4]
        }
      ]
    }
  });
  res.send(users);
})

module.exports = router;
