var mongoose=require('mongoose');

var StatusSchema = new mongoose.Schema({
   name:String
});

var QuestionSchema = new mongoose.Schema({
  question:String,
  response:String,
  choice1:String,
  choice2:String,
  choice3:String,
  choice4:String
});

var QCMSchema = new mongoose.Schema({
   name:String,
   status:StatusSchema,
   questions:[QuestionSchema]
});

module.exports = mongoose.model('QCM', QCMSchema);