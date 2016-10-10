app.controller("myCtrl", function($scope) {
    $scope.products = ["bread", "milk", "sugar", "water"];
    $scope.addItem = function() {
        $scope.errortext = "";
        if (!$scope.addMe) { return; }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = funtion(x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }

});