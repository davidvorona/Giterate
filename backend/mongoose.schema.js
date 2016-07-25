//mongoose schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  fName: String,
  lName: String,
  email: String,
  Questions: Object,
  ParsedAnswers: Object,
  TestedAnswers: Object
});
  //^^ either db.update push or db.set Array with proper info


const User = mongoose.model('User', UserSchema);
module.exports = User;