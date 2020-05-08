const express = require('express');

const app= express();
app.use(express.static("public"));

function test(){
  var test = $(document);
  test.bind('scroll', function() {
      // "Desactivar" el scroll horizontal
      if (test.scrollLeft() !== 0) {
          test.scrollLeft(0);
      }
  })
};


app.get("/", function(req,res){
  res.sendFile(__dirname + "/homepage.html");
});

app.get("/homepage.html", function(req,res){
    res.sendFile(__dirname + "/homepage.html");
});

app.get("/homepage.html", function(req,res){
    res.sendFile(__dirname + "/homepage.html");
});

app.get("/about-us.html", function(req,res){
    res.sendFile(__dirname + "/about-us.html");
});

app.get("/Shop.html", function(req,res){
    res.sendFile(__dirname + "/Shop.html");
});

app.get("/Contact-us.html", function(req,res){
    res.sendFile(__dirname + "/Contact-us.html");
});

app.get("/Shopping-bag.html", function(req,res){
    res.sendFile(__dirname + "/Shopping-bag.html");
});

app.get("/user-account.html", function(req,res){
    res.sendFile(__dirname + "/user-account.html");
});

app.get("/product-details.html", function(req,res){
    res.sendFile(__dirname + "/product-details.html");
});

app.listen(3000, function(){
  console.log("ready");
});
