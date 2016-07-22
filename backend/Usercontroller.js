const User = require('./mongoose.schema')

UserController = {};

UserController.createNewUser = function(req, res) {
	var newuser = {};
	if(req.body.Fname.length > 0) newuser.fname = req.body.Fname
	if(req.body.Lname.length > 0) newuser.Lname = req.body.Lname

	User.create(newuser, function(err, data) {
		if(!err) {
			console.log("Algorithms sent to candidate, maybe render his bitch ass to his dashboard?");
			return "Algorithms sent to candidate";
		} else {
			console.log("Error, didn't work you suck");
			return("Error, didn't work you suck")
		}
	});
};

UserController.getAllUsers = function(req, res) {
	User.find({});
}





module.exports = UserController;

// Usercontroller.updateUser = function(req, res) {
// 	//put request update user
// }
