(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Lena";
        $scope.state = "1";

        $scope.sayMessage = function () {
          return "Hi there";
        };
        
        $scope.feed = function () {
           $scope.state = "2";
        };
    }

})();