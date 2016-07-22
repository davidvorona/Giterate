//app/routes.js
var User = require('./mongoose.schema');
var http = require('http');
var path = require('path');
var Usercontroller = require('./Usercontroller')
module.exports = function(app) {
  //server routes/ api calls/ authentication routes


//create user route
//get user info route
app.get('/', function(res, req) {
	res.sendFile('/')
})

app.post('/candidateCreate', Usercontroller.createNewUser);

app.get('./allusers', Usercontroller.getallusers)

// app.get('*', function(req, res) {
// 	res.send("hello")
// });


	//send everything to home page for now




} 

