//mongoose schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.createConnection('mongodb://localhost/8080');

// var db = mongoose.connection;

// db.on('error', function (err) {
// console.log('connection error', err);
// });
// db.once('open', function () {
// console.log('connected.');
// });


var Userschema = new Schema({
  Fname: String,
  Lname: String,
  Questions: {},
  ParsedAnswers:{},
  TestedAnswers:{}
});
  //^^ either db.update push or db.set Array with proper info


const User = mongoose.model('User', Userschema);
