//app/routes.js
var User = require('./mongoose.schema');
var http = require('http');
var path = require('path');
var UserController = require('./UserController')
module.exports = function(app) {
  //server routes/ api calls/ authentication routes


//create user route
//get user info route
app.get('/', function(res, req) {
	res.sendFile('/')
})

app.post('/candidateCreate', UserController.createNewUser);

app.get('./allusers', UserController.getallusers)

// app.get('*', function(req, res) {
// 	res.send("hello")
// });


	//send everything to home page for now




}