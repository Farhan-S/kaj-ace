//jshint esversion:6
const express=require("express");
const body_parser=require("body-parser");
const request=require("request");
const https=require("https");
const app=express();



app.use(express.static("public"));
app.use(body_parser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");

});

// app.post("/",(req,res)=>{

// });

app.listen(3000,()=>{
    console.log("server runs successfully !");
});