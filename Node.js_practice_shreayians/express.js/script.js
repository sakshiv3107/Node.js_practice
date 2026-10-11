const express = require('express');
const app = express();

app.use((req , res, next)=>{
    console.log("Hii Sakshi");
    next();
})
app.get('/' , (req,res)=>{
    res.send("Hello Wold")
});
app.get('/profile' , function(req, res){
    res.send("Say Hello Sakhi");
})

app.listen(3000);