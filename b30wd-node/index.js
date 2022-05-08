//simple hello guvi application

var express=require('express');
var app=express();
var bodyparser=require("body-parser");
var router=express.Router();
//create a callback function
app.route('/node').get((req, res) => {
res.send("node is going");
});

app.route('/mongo').get((req, res)=>{
res.send("momgo is going");
});

app.route('/mysql').get((req,res)=>{
    res.send("mysql is going");
});

//i will be responding to post request
//app.post('/',(req, res)=>{
    //http response, inside it can be string
    //this method accepts a single parameter
    //return a object

   // res.send("post method is used in guvi");
//})

//routing
app.get('/', (req,res)=>{
    res.send("default page");
})
app.listen(3000, ()=>{
    console.log("app is running successfully");
});
