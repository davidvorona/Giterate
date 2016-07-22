angular
  .module('ResultsFactory', ['$http'])
  .factory('ResultsFactory', ResultsFactory);


function ResultsFactory($http) {
  return $http.get('http://localhost:3000');
}

// this needs to just grab the db.specificUserData and then it will be passed into questionController (go to that)

// this will return the data from the data base in a factory, which is then passed to the controller for manipulation
