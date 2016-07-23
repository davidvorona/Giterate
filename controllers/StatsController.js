resultsController = {};

resultsController = function(qArray) {
  // takes input and passes it through stringifyFunction and codeParser, and testing suite, and pushes all to database
  // all into database
  for (var i = 0; i < qArray.length; i++) {
    var json = JSON.stringify(qArray[i]);
    var test = qArray[i];
    resultsController.codeParser(json);
    results.funcTimer(test);
  }
}

resultsController.stringifyFunction = function(obj, prop) { // this will take a function, unmanipulated;
  var placeholder = '';
  var fns = [];
  var json = JSON.stringify(obj, function(key, value) {
    if (typeof value === 'function') {
      fns.push(value);
      return placeholder;
    }
    return value;
  }, 2);
  json = json.replace(new RegExp('"' + placeholder + '"', 'g'), function(_) {
    return fns.shift();
  });
  return json;
};


resultsController.codeParser = function(string) { // this will take the stringifyFunction(func);
	string = string.replace(/\\/g, '$');
	let newLines = 0;
	let fors = 0;
	let whiles = 0;
	let decs = 0;
	let varsObj = {};
	let arrows = 0;
	let funcs = -1;
	let inputChange = 0;
	let spaceComp = 0;
	let statsObj = {};
	for (var i = 0; i < string.length; i++) {
		if (string[i]+string[i+1] === '$n') newLines++;
		if (string[i]+string[i+1]+string[i+2] === 'for') fors++;
		if (string[i]+string[i+1]+string[i+2]+string[i+3]+string[i+4] === 'while') whiles++;
		if (string[i]+string[i+1]+string[i+2] === 'var') decs++;
    if (string[i]+string[i+1] === '=>') arrows++;
    if (string[i]+string[i+1]+string[i+2]+string[i+3]+string[i+4]+string[i+5]+string[i+6]+string[i+7] === 'function')  funcs++;
	}
	statsObj.newLines = newLines;
	statsObj.fors = fors;
	statsObj.whiles = whiles;
	statsObj.decs = decs;
	statsObj.arrows = arrows;
	statsObj.funcs = funcs;
	return statsObj; // returns our object of numbers
}

resultsController.funcTimer = function(funcName, string, parameter) {
	eval(string);
	var currentTime = performance.now();
	console.log(currentTime);
	romanNumeral(parameter);
	var finishTime = performance.now();
	var funcTime = finishTime - currentTime;
	return "Call to " + funcName + " took " + funcTime + " milliseconds."
} // takes the funcName, the stringified

exports.module = resultsController;
