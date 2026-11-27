var express = require('express');
var router = express.Router();
const userModel = require('./users')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/create', async function(req, res) {
//   const createdUser = await userModel.create([
//     {
//     username:"Sakshi31",
//     name:"Sakshi",
//     age:21
//     },
//     {
//     username:"Sumit6",
//     name:"Sumit",
//     age:24
//     },
//     {
//     username:"Satyam_27",
//     name:"Satyam",
//     age:29
//     },
// ])
//   res.send(createdUser);
// });
// router.get('/find' , async function(req ,res){
//   let allUsers = await userModel.find();
//   res.send(allUsers);
// })
// router.get('/find' , async function(req ,res){
//   let allUsers = await userModel.findOne({username:"Satyam_27"});
//   res.send(allUsers);
// })

// router.get('/delete' , async function(req, res){
//   let deletedUser = await userModel.findOneAndDelete({
//     username:"Satyam_27"
//   })
//   res.send(deletedUser);
// })


//SESSIONS ANS COOKIES 

//SESSIONS
// router.get('/' , function(req , res){
//   req.session.ban = true;
//   res.render("index");
// })

// router.get('/check' , function(req , res){
//   if(req.session.ban === true){
//     res.send("You are banned");
//   }
//   else 
//       res.send("You are not banned");
// })

// router.get("/destroy" , function(req , res){
//   req.session.destroy(
//     function(err){
//       if(err) throw err;
//       res.send("Ban removed");
//     }
//   )
// })


//COOKIES
router.get("/" , function(req , res){
  res.cookie("age",21);
  res.render("index");
})

router.get("/check" , function(req,res){
  console.log(req.cookies.age);
  res.send("Check")
});

router.get("/delete" , function(req ,res){
  res.clearCookie("age");
  res.send("clear");
})


module.exports = router;
