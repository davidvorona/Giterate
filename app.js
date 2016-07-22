var app = angular
  .module('Giterate', [
    'ngRoute',
    'AlgorithmsController',
    'ResultsController',
    'HomeController'
  ]);

app.config(configFunction);

function configFunction($routeProvider) {

  $routeProvider
    .when('/algorithms', {
      templateUrl: './partials/algorithms.html',
      controller: 'AlgorithmsController'
    })
    .when('/results', {
      templateUrl: './partials/results.html',
      controller: 'ResultsController'
    })
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    });
}
