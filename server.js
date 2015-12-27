var express=require('express');
var bodyParser=require('body-parser');
var api=require('./api.js');
var app=express();

app.use(bodyParser.json());

api(app);

app.listen(3000,function(){
	console.log('Listening to port '+3000);
});