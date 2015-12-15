angular.module('getEd').controller('searchCtrl', function($scope, searchService) {

	$scope.searchInstitutions = function(search) {
		searchService.searchInstitutions(search).then(function(results) {
			$scope.institutionProfiles = results.data;
			console.log($scope.institutionProfiles);
		}, function(err) {
			console.log(err)
		});
	}
	
})