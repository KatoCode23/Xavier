var app = angular.module('app', []);

app.controller('contentController', function($scope){

  $scope.IsVisible = false;
  $scope.ShowHide = function () {
  $scope.IsVisible = $scope.IsVisible ? false : true;
  }
  $scope.YouTube = false;
  $scope.ShowTrailer = function () {
  $scope.YouTube = $scope.YouTube ? false : true;
  }
});
