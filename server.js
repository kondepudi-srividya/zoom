const express = require("express");
const app = express();
const server = require("http").Server(app);


 app.get("/", function(req,res){
     res.redirect('/${uuid4()}');
 });
 const port = process.env.PORT || 3030; 
 const {v4:uuidv4} = require("uuid");

 server.listen(port, function(){
     console.log("server is running")
 });