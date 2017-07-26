var app = angular.module('app', []);

app.controller('bodyController', function($scope){

console.log('Hello Sir Xavier!!!');
});

app.controller('headerController', function($scope){

  $scope.clickbate = [
      {
          name: 'BK'
      },
      {
         name: 'B4'
      },
      {
        name: 'Barclays'
      }
  ];

$scope.testClick = function(kalen){
var position1 = $scope.clickbate[0];
var position2 = $scope.clickbate[1];
var position3 = $scope.clickbate[2];
console.log(position1);
console.log(position2);
console.log(position3);
console.log(position1.name);
}
});

app.controller('contentController', function($scope){

console.log('Hey, What Up X...');
});
