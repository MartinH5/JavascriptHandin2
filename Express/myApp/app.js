//const express = require("express")(); Best to do this code in 2 lines
//const f1 = function(req,res){     }) Could replace the arrow notation
let dummyPortNumber = 3333;

const express = require("express");
const app = express();

//Midleware
app.use(function(req,res,next){
    console.log("Time: ", Date.now() + "log all requests");
    next();
});

app.use(function(req,res,next){
    //Check user, if somones is logged in, if theres a token w. role etc.
    req.status= "SuperUser";
    next();
});

app.get("/", (req,res)=>{
const status = req.status;
    if(status === LosyUser){
        "Go Away"
    }
res.send("Hello, hello" + status);
});

app.get("/world", (req,res)=>{
res.send("Hello Wonderful and Amazing World");
});

app.listen(dummyPortNumber, ()=>console.log("Server Started"));

