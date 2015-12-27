var express=require('express');
var bodyParser=require('body-parser');
var api=require('./api.js');
var app=express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api(app);

app.listen(3000,function(){
	console.log('Listening to port '+3000);
});