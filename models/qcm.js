var mongoose=require('mongoose');
var status=require('./status.js');
var question=require('./question.js');

var QCMSchema = new mongoose.Schema({
   name:String,
   questions:[question],
   status:status
});

module.exports = mongoose.model('QCM', QCMSchema);