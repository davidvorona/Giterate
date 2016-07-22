angular
  .module('ResultsController', [
    'ngRoute',
    'ResultsController'
  ]);
  .controller('ResultsController', resultsController);

// need to make an $http request to the mongodb and run that data through the resultsController

function resultsController($scope) {
  
}
