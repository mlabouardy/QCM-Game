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
			res.send(qcms);
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

	app.get('/qcm/:id',function(req,res){
		QCM.findOne({_id:req.params.id},function(err,qcm){
			if(err)
				throw err;
			res.send(qcm);
		});
	});
}