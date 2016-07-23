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

// app.use("/styles", express.static(__dirname + "/styles")); 

app.get('/')

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../views/employer.html'));
});

app.get('/results', function(req, res){
  res.sendFile(path.join(__dirname + '/../views/results.html'));
});


app.get('/question/:fName/:lName', QuestionController.chooseUser, function(req, res){
	res.status(404).send('Please refer to the correct url and try again!')
});

// app.get('http://localhost:8080/results/controllers/HomeController.js', function(req, res){
// 	res.sendFile(path.join(__dirname + '/../views/results.html'));
// });
// app.get('http://localhost:8080/results/controllers/ResultsController.js', function(req, res){
// 	res.sendFile(path.join(__dirname + '/../views/results.html'));
// });

// app.get('http://localhost:8080/results/factories/ResultsFactory.js', function(req, res){
// 	res.sendFile(path.join(__dirname + '/../views/results.html'));
// });

// app.get('http://localhost:8080/results/appAngular.js', function(req, res){
// 	res.sendFile(path.join(__dirname + '/../views/results.html'));
// });

app.get('*.js', function(req, res){
	res.sendFile(path.join(__dirname + '/..' +req.url));
});


app.get('*', function(req, res){
	res.status(404).send('Please refer to the correct url and try again!')
});





app.post('/employer', UserController.createNewUser);

app.get('/allusers', UserController.getAllUsers)

// app.get('*', function(req, res) {
// 	res.send("hello")
// });

//send everything to home page for now

}
