const express = require("express");
const app = express();
const path = require("path");
const route = require("./router");
var bodyParser=require("body-parser");
 app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'static')));
app.use(route);
app.listen(80,()=>{
    console.log("server is running");
})

