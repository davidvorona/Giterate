//app/routes.js
var User = require('./mongoose.schema');
var http = require('http');
var path = require('path');

var UserController = require('./Usercontroller')
var QuestionController = require('./questionController')

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


app.get('*', function(req, res){
	res.status(404).send('Please refer to the correct url and try again!')
});

app.post('/question', UserController.testData, UserController.updateUser);

app.post('/employer', UserController.createNewUser);

app.get('/allusers', UserController.getAllUsers);
}
