(function () {
  'use strict';
  // var x = "hello";
  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
    $scope.name = "Lena";
    $scope.sayHello = function () {
      return "Hello there";
    };
  });
})();
