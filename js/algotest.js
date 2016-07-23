var UserController = require('./../backend/UserController');

function run(q1,q2,q3){

	var resObj = {};
		eval(q1);

		
		eval(q2); 

		
		eval(q3); 

		var testObj = {}; 

		if(romanNumeral !== undefined){
			var romanNumTest = {
				name: 'romanNum', 
				smallNumbers: false,
				largeNumbers: false, 
				zero: false, 
				string: false, 
				counter: 0,
				total: 4
			};
			
			if (romanNumeral(29) === "XXIX") romanNumTest.smallNumbers = true; 
			if (romanNumeral(3224) === "MMMCCXXIV") romanNumTest.largeNumbers = true; 
			if (romanNumeral(0) === undefined) romanNumTest.zero = true; 
			if (romanNumeral('testing') === undefined) romanNumTest.string = true; 


			for(var prop in romanNumTest){
				if (romanNumTest[prop] ===true) romanNumTest.counter += 1; 
			}
			resObj['romanNumTest'] = romanNumTest;
		}

		if(pow !== undefined){
			var powTest = {
				name: 'pow', 
				smallNumbers: false,
				largeNumbers: false, 
				zero: false, 
				one: false, 
				counter: 0,
				total: 4
			};
			
			if (pow(3,3) === 27) powTest.smallNumbers = true; 
			if (pow(5,10) === 9765625) powTest.largeNumbers = true; 
			if (pow(1,15) === 1) powTest.one = true; 
			if (pow(0, 20) === 0) powTest.zero = true; 

			for(var prop in powTest){
				if (powTest[prop] ===true) powTest.counter += 1; 
			}
			resObj['powTest'] = powTest;
		}

		if(bestProfit !== undefined){
			var bestProfitTest = {
				name: 'bestProfit', 
				smallArray: false,
				largeArray: false, 
				noProfit: false, 
				string: false, 
				counter: 0,
				total: 5
			};
			
			if (bestProfit([30,20,10,50,90]) === 80) bestProfitTest.smallArray = true; 
			if (bestProfit([30,20,10,50,90,0,40,80,20,70,80,0,90,100,40,80,20,30]) === 100) bestProfitTest.largeArray = true; 
			if (bestProfit([100,80,60,40,20,0]) === 0) bestProfitTest.noProfit = true; 
			if (bestProfit('testing') === 0) bestProfitTest.string = true; 


			for(var prop in bestProfitTest){
				if (bestProfitTest[prop] ===true) bestProfitTest.counter += 1; 
			}
			resObj['bestProfitTest'] = bestProfitTest;
		}

		return resObj;

		// console.log('romanNumTest', romanNumTest);
		// console.log('powTest', powTest);
		// console.log('bestProfitTest', bestProfitTest); 
}

module.exports = run; 