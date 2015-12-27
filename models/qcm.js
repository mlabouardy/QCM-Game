var mongoose=require('mongoose');

var StatusSchema = new mongoose.Schema({
   name:String
});

var ChoiceSchema = new mongoose.Schema({
	name:String
});

var QuestionSchema = new mongoose.Schema({
  question:String,
  response:ChoiceSchema,
  choices:[ChoiceSchema]
});

var QCMSchema = new mongoose.Schema({
   name:String,
   status:StatusSchema,
   questions:[QuestionSchema]
});

module.exports = mongoose.model('QCM', QCMSchema);