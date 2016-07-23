//app/routes.js
var User = require('./mongoose.schema');
var http = require('http');
var path = require('path');

var UserController = require('./UserController')
var QuestionController = require('./QuestionController')

module.exports = function(app) {
//server routes/ api calls/ authentication routes


//create user route
//get user info route
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/employer.html'));
});

app.get('/question/:fName/:lName', QuestionController.chooseUser, function(req, res){
	res.status(404).send('Please refer to the correct url and try again!')
});

app.get('/questions', function(req, res){
	var q1 = "SWEET";
	var q2 = 'BALLS';
	var q3 = 'OF FIRE';
	res.render('question.ejs', {q1: q1, q2: q2, q3: q3});
});

app.get('*', function(req, res){
	res.status(404).send('HUHHHHH? GET A LIFE')
});


app.post('/employer', UserController.createNewUser);

app.get('/allusers', UserController.getAllUsers)

// app.get('*', function(req, res) {
// 	res.send("hello")
// });

//send everything to home page for now

}
