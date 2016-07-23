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
