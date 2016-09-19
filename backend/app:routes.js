//app/routes.js
var User = require('./mongoose.schema');
var http = require('http');
var path = require('path');

var UserController = require('./UserController')
var QuestionController = require('./questionController')

module.exports = function(app) {
//server routes/ api calls/ authentication routes

//create user route
//get user info routes


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../views/employer.html'));
});

app.get('/results', function(req, res){
  res.sendFile(path.join(__dirname + '/../views/results.html'));
});


app.get('/question/:fName/:lName', QuestionController.chooseUser, function(req, res){
	res.status(404).send('Please refer to the correct url and try again!')
});


app.get('*.js', function(req, res){
	res.sendFile(path.join(__dirname + '/..' +req.url));
});



app.get('*', function(req, res){
	res.status(404).send('Please refer to the correct url and try again!')
});

app.post('/question', UserController.testData, UserController.updateUser);




app.post('/employer', UserController.createNewUser);

app.get('/allusers', UserController.getAllUsers);
}
