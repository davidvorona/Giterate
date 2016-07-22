function run(event){
		event.preventDefault();
		var prob1 = $('#ans1').val();
		eval(prob1);

		var prob2 = $('#ans2').val();
		eval(prob2); 

		var prob3 = $('#ans3').val();
		eval(prob3); 


		if(romanNumeral){
			var romanNumTest = {
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
		}

		if(pow){
			var powTest = {
				smallNumbers: false,
				largeNumbers: false, 
				zero: false, 
				one: false, 
				counter: 0,
				total: 4
			};
			
			if (pow(3,3) === 27) powTest.smallNumbers = true; 
			if (pow(5,10) === 9765625) powTest.largeNumbers = true; 
			if (pow(15) === 1) powTest.one = true; 
			if (pow(0, 20) === 0) powTest.zero = true; 

			for(var prop in powTest){
				if (powTest[prop] ===true) powTest.counter += 1; 
			}
		}

		if(bestProfit){
			var bestProfitTest = {
				smallArray: false,
				largeArray: false, 
				noProfit: false, 
				string: false, 
				counter: 0,
				total: 4
			};
			
			if (bestProfit([30,20,10,50,90]) === 80) bestProfitTest.smallArray = true; 
			if (bestProfit([30,20,10,50,90,0,40,80,20,70,80,0,90,100,40,80,20,30]) === 100) bestProfitTest.largeArray = true; 
			if (bestProfit([100,80,60,40,20,0]) === 0) bestProfitTest.noProfit = true; 
			if (bestProfit('testing') === 0) bestProfitTest.string = true; 


			for(var prop in bestProfitTest){
				if (bestProfitTest[prop] ===true) bestProfitTest.counter += 1; 
			}
		}

		console.log('romanNumTest', romanNumTest);
		console.log('powTest', powTest);
		console.log('bestProfitTest', bestProfitTest)
		
}