const express = require('express');

const app= express();
app.use(express.static("public"));


app.get("/", function(req,res){
  res.sendFile(__dirname + "/homepage.html");
});


app.listen(process.env.PORT, function(){
  console.log("ready");
});
