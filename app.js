(function () {
  "use strict";
  angular
    .module("myFirstApp", [])
    .controller("MyFirstController", function ($scope) {
      $scope.name = "Andy";
      $scope.sayHello = function () {
        return "Hello Coursera!";
      };
    });
})();
