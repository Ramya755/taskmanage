const express = require('express');
const connectToDo = require('./config/db');
const taskroute=require("./routes/userroute");
const app=express();


app.use(express.json());
app.use("/api",taskroute);

app.get("/",(req,res)=>{
    res.send("server activated");
});

app.listen(8000,async()=>{
    console.log("server created");
    connectToDo()
});