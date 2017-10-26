var app = angular.module('app', []);

app.controller('contentController', function($scope){

  $scope.IsVisible = false;
  $scope.ShowHide = function () {
  $scope.IsVisible = $scope.IsVisible ? false : true;
  }

  $scope.gallery = [
    {
      name: 'Elijah - Business Owner, Inktastic',
      img: 'Elijah.jpg'
    },
    {
      name: 'Clark Kent - DJ/Producer/Shoes Enthusiast',
      img: 'ClarkKent.jpg'
    },
    {
      name: 'Gotti - Business Owner, Exotic Cuts',
      img: 'Gotti.jpg'
    }
  ];
});
