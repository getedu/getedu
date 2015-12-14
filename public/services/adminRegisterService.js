angular.module('getEd').service('adminRegisterService', function($http) {
      
	this.getInstitutions = function(query) {
		var query = query ? '?q=' + query : '';
		return $http({
			method: 'GET',
			url: '/api/institutions' + query,
		});
	}
});
