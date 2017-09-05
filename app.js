var app = angular.module('app', []);

app.controller('bodyController', function($scope){

console.log('Hello Sir Xavier!!!');
});

app.controller('headerController', function($scope){

  $scope.clickbate = [
      {
          name: 'Coming Soon...'
      }
  ];

$scope.testClick = function(kalen){
var position1 = $scope.clickbate[0];
console.log(position1.name);
}
});

app.controller('contentController', function($scope){

console.log('Hey, What Up X...');
});
