const User = require('./mongoose.schema')

QuestionController = {};

QuestionController.chooseUser = function(req, res, next) {
	var newuser = {};
	var fName = req.params.fName;
	var lName = req.params.lName;

	newuser['fName'] = fName;
	newuser['lName'] = lName;
	User.findOne(newuser, function(err, user){
		console.log(user.email)
	});
	next();
};

// first: shray
// last: bansal
// localhost:8080/question?fName=shray&lName=bansal
// localhost:8080/question?fName={fNameVar}&lName={lNameVar}


module.exports = QuestionController;

// Usercontroller.updateUser = function(req, res) {
// 	//put request update user
// }
