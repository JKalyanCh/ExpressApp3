var express = require("express");
var app = express();
var tiffins = require("./tiffins.json");
var thalies = require("./lunch.json");

app.get("/", function (req, res) {
  console.log("Request is received");
  res.send("Response is sent");
});

app.get("/getTiffinsByName/:x", function (req, res) {
  console.log(req.params);
  var itom = tiffins.find((t) => {
    if (t.name.toUpperCase() === req.params.x.toUpperCase()) {
      return true;
    }
  });
  res.send(itom);
});

app.get("/getLunchByName/:x", function (req, res) {
  var lunch = thalies.find((t) => {
    if (t.name.toUpperCase() === req.params.x.toUpperCase()) {
      return true;
    }
  });
  res.send(lunch);
});

app.listen(4500, function () {
  console.log("The server is running on 4500");
});
