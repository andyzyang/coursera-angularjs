(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.dishes = "";
    $scope.checkIfTooMuch = function (dishes) {
      let numberOfDishes = 0;
      for (let dish of dishes.split(",")) {
        if (dish.trim() != "") {
          numberOfDishes++;
        }
      }
      if (numberOfDishes > 3) {
        $scope.message = "Too much!";
      } else if (numberOfDishes == 0) {
        $scope.message = "Please enter data first";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  }
})();
