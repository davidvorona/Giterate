const User = require('./mongoose.schema');

QuestionController = {};

QuestionController.chooseUser = function(req, res) {
	var chosenUser = {};
	var fName = req.params.fName;
	var lName = req.params.lName;

	chosenUser['fName'] = fName;
	chosenUser['lName'] = lName;

	
	User.findOne(chosenUser, function(err, user) {
		QuestionController.savedUser = user._id;
		if(err) console.log('ERROR!')
		else if(user === null) {
			res.redirect('/');
			res.end();
		} else {
			var q1, q2, q3, id;
			var keyArr = Object.keys(user.Questions);
			q1 = user.Questions[keyArr[0]];
			q2 = user.Questions[keyArr[1]];
			q3 = user.Questions[keyArr[2]];
			res.render('question.ejs', {q1: q1, q2: q2, q3: q3});
		}
	});
};

module.exports = QuestionController;