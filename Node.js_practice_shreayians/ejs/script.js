const express = require('express');
const app = express();
const path =require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/' , function(req , res ){
    res.render("index" , {age:12})
});
app.get('/contact' , function(req , res ){
    res.render("contact" , {name:"piyushit" , age:12})
});

app.listen(3000);