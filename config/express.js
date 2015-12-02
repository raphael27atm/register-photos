var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

module.exports = app;
