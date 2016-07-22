// in questionController, elements on DOM are populated with items specified from db.specificUserData

angular
  .module('ResultsController', [
    'ngRoute',
    'ResultsController',
    'ResultsFactory'
  ]);
  .controller('QuestionController', questionController);

// after getting updated input from candidate page, run inputs through tests and codeParser in resultsController and pass that data back into db

function questionController($scope, ResultsFactory) {
  ResultsFactory.success(function(data){    // this will change and much will be moved to questionController, which takes initial userData and populates candidate
    $scope.results = data;
  }).then(function(data) {
    $scope.questions = data;
  }).error(function(data, status){
    console.log(data, status);
    $scope.results = [];
  });
}
