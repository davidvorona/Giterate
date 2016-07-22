angular
  .module('ResultsController', [
    'ngRoute',
    'ResultsController',
    'ResultsFactory'
  ]);
  .controller('ResultsController', resultsController);

// after getting updated input from candidate page, run inputs through tests and codeParser in resultsController and pass that data back into db

function resultsController($scope, ResultsFactory) {
  $scope.input;
  // takes input and passes it through stringifyFunction and codeParser, and testing suite, and pushes all to database
  // all into database

}

var stringifyFunction = function(obj, prop) {
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

function codeParser(string) {
	string = string.replace(/\\/g, '$');
	let newlines = 0;
	let fors = 0;
	let whiles = 0;
	let vars = 0;
	let varsObj = {};
	let arrows = 0;
	let funcs = 0;
	let inputChange = 0;
	let spaceComp = 0;
	let statsArray = [];
	for (var i = 0; i < string.length; i++) {
		if (string[i]+string[i+1] === '$n') newlines++;
		if (string[i]+string[i+1]+string[i+2] === 'for') fors++;
		if (string[i]+string[i+1]+string[i+2]+string[i+3]+string[i+4] === 'while') whiles++;
		if (string[i]+string[i+1]+string[i+2] === 'var') {
			decs++;
		}
	}
	statsArray.push(newlines, fors, whiles);
	return statsArray;
}

codeParser(string);
