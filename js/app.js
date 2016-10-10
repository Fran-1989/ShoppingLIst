var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function ($scope) {
	$scope.products = ["bread", "milk", "sugar", "water"];

});