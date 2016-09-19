const User = require('./mongoose.schema');
var EmailController = require('./EmailController');

UserController = {};

var questions = {
	fizzBuzz: 'Please write a function that takes a number as an input and returns an array from 1 up to the input number containing "fizz", "buzz", "fizzbuzz" or a number.  "Fizz" should appear if number % 3 === 0, "Buzz" if the number % 5 === 0 and "FizzBuzz" if number % 3 === 0 and number % 5 === 0. If not divisible by either, return number.  Ex: fizzBuzz(15) => [1,2,"Fizz", 4,"Buzz", 6,7,8,"Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"].  Handle obvious edge cases.',
	mergeSort: 'Please write a function that sorts an array WITHOUT using a for loop.  Consider recursion. Ex: mergeSort([5,2,6,9,0,3,1] => [0,1,2,3,5,6,9]. Handle obvious edge cases.',
	fibo: 'Please write a function that takes an input number and returns the number at that index in the Fibonacci sequence. Fibonacci: Fn = Fn-1 + Fn-2. Ex: fibonacci(11) => 89. Handle obvious edge cases.',
	pow: 'Please write a function that takes a base and power as inputs and returns the base number to that power.  Ex: pow(2,5) => 32. Handle obvious edge cases.',
	romanNum: 'Please write a function that takes a number as an input and returns the roman numeral equivalent.  Ex: romanNumeral(29) => "XXIX". Handle obvious edge cases.',
	bestProfit: 'Please write a function that take an array of numbers as an input and returns the greatest profit possible assuming numbers are treated as prices every hour through the day.  Note: you cannot sell the item before you buy it.  Ex: bestProfit([120,20,30,90,0,60,40,10]) => 70. Handle obvious edge cases.'
};

// var questionNames = ['fizzBuzz','mergesort','fibonacci','pow','romanNumeral','bestProfit'];


UserController.createNewUser = function(req, res) {
	var newuser = {
		Questions: {}
	};
	for (var prop in req.body){
       if (req.body[prop] === 'on'){
              newuser['Questions'][prop] = questions[prop];
              }
           }

	if(req.body.fName.length > 0) newuser.fName = req.body.fName
	if(req.body.lName.length > 0) newuser.lName = req.body.lName
	if(req.body.email.length > 0) newuser.email = req.body.email

	User.create(newuser, function(err, data) {
		if(!err) {
			console.log("Algorithms sent to candidate, maybe render his bitch ass to his dashboard?");
			EmailController.autoMail(newuser.fName, newuser.lName, newuser.email)
			console.log('newuser', newuser);
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
