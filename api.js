'use strict';

var mongoose=require('mongoose');
var QCM=require('./models/qcm.js');
var constants=require('./constants.js');

mongoose.connect(constants.DATABASE_URL);

module.exports=function(app){
	app.get('/qcm',function(req,res){
		QCM.find(function(err,qcms){
			if(err)
				throw err;
			console.log(qcms);
		});
	});

	app.post('/qcm', function(req,res){
		var qcm=new QCM(req.body);
		qcm.save(function(err){
			if(err)
				throw err;
			console.log("QCM saved !");
			res.status(200).send();
		});
	});
}