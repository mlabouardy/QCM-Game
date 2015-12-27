var mongoose=require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question:String,
  response:String,
  choice1:String,
  choice2:String,
  choice3:String,
  choice4:String
});

module.exports = mongoose.model('Question', QuestionSchema);