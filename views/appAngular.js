var app = angular
  .module('Giterate', [
    'ngRoute',
    'ResultsController',
    'HomeController'
  ]);


// work through this, but $httpProvider apparently allows cross domain request from web server
app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/emphome.html',
      controller: 'HomeController'
    })
    .when('/results', {//CHECK WHAT RESTFUL SHOULD BE
      templateUrl: './partials/empresults.html',
      controller: 'ResultsController'
    })
}
