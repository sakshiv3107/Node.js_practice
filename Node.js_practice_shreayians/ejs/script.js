const express = require('express');
const app = express();
const path =require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname , 'public')))

app.get('/' , function(req , res ){
    res.render("index" , {age:12})
});
app.get('/contact' , function(req , res ){
    res.render("contact" , {name:"piyushit" , age:12})
});
app.get('/error' , function(req , res ,next){
    throw new Error("Something went wrong")
})
app.use(function errorhandler(err , req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500);
    res.render('error' , {error : err});
})

app.listen(3000);