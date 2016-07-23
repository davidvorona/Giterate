const User = require('./mongoose.schema')

UserController = {};

UserController.createNewUser = function(req, res) {
	var newuser = {};
	if(req.body.fName.length > 0) newuser.fName = req.body.fName
	if(req.body.lName.length > 0) newuser.lName = req.body.lName
	if(req.body.email.length > 0) newuser.email = req.body.email

	User.create(newuser, function(err, data) {
		if(!err) {
			console.log("Algorithms sent to candidate, maybe render his bitch ass to his dashboard?");
			return "Algorithms sent to candidate";
		} else {
			console.log("Error, didn't work you suck");
			return("Error, didn't work you suck")
		}
	});
	res.redirect('/')
	//CHANGE REDIRECT TO RESULTS PAGE
};

UserController.getAllUsers = function(req, res) {
	User.find({});
}

module.exports = UserController;

// Usercontroller.updateUser = function(req, res) {
// 	//put request update user
// }
