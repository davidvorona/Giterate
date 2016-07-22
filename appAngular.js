var app = angular
  .module('Giterate', [
    'ngRoute',
    'AlgorithmsController',
    'ResultsController',
    'HomeController'
  ]);


// work through this, but $httpProvider apparently allows cross domain request from web server
app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/employer', {
      templateUrl: './partials/employer.html',
      controller: 'AlgorithmsController'
    })
    .when('/candidate', {
      templateUrl: './partials/candidate.html',
      controller: 'ResultsController'
    })
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    });
}
