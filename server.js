var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

var app=express();

mongoose.connect('mongodb://localhost/qcm');


app.listen(3000,function(){
	console.log('Listening to port '+3000);
});