const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
   // console.log(__dirname);
})
app.get("/bmicalculator",function(req,res)
{
    res.sendFile(__dirname+"/bmicalculator.html");
   // console.log(__dirname);
})
app.post("/bmicalculator",function(req,res)
{
    var w=+req.body.weight;//or use parseInt or parsefloat
    var h=+req.body.height;
    var result=(w*(39.3701*39.3701))/(h*h);
    res.send("<h2>Your BMI is "+result+"</h2>");
})
app.post("/",function(req,res)
{
   // console.log(req.body.num2);
   var num1=+req.body.num1;//or use Number{req.body.num1};
   var num2=+req.body.num2;
   var result=num1+num2;
    res.send("Sum of your number is "+result);
})
app.listen(3000,function()
{
    console.log("Server has been started");
})
