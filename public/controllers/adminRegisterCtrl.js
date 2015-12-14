angular.module('jsonMart').controller('shoppingCtrl', function($scope, $adminRegisterService) {
	
	$scope.institutions = 
	$scope.getInstitutions = function(searchQuery) {
	adminRegisterService.getInstitutions(searchQuery).then(function(results) {
		console.log(results);
		$scope.institutions = results;
	});
	}
});