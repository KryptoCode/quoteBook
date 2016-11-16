angular.module("myApp").controller('mainController', function($scope, myServices) {
	$scope.getQuote = function() {
		$scope.quotes = myServices.getQuote();
	}
	$scope.getQuote();
	$scope.quote = {

		text: "Quote Text",
		author: "Quote Author"
	};
	
	$scope.addQuote = function() {
		
		myServices.addQuote($scope.quote);
		$scope.quote = {
			text: "Quote Text",
			author: "Quote Author"
		};
	
	};
	$scope.removeQuote = function() {
		myServices.removeQuote($scope.rmvIndex - 1);
		$scope.rmvIndex = 0;
	}

})