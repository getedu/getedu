angular.module('getEd').service('searchService', function($http) {

	this.searchInstitutions = function(search) {
		var query = query ? '?q=' + query : '';
		return $http({
			method: 'GET',
			url: '/api/institutionProfiles' + query,
		});
	}

});