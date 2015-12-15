angular.module('getEd').controller('adminRegisterCtrl', function($scope, adminRegisterService) {
	
	$scope.selectedInst = '';

	$scope.getInstitutions = function(search) {
		adminRegisterService.getInstitutions(search).then(function(results) {
			console.log(results.data);
			$scope.institutions = results.data;
		});
	}

	$scope.addAdminInfo = function() {

	}
});