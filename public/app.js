angular.module('getEd', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('/home', {
		url: '/home',
		templateUrl: 'templates/homeTmpl.html',
		controller: 'homeCtrl'
	})
	.state('/admin', {
		url: '/admin',
		templateUrl: 'templates/adminProfileTmpl.html',
		controller: 'adminProfileCtrl'
	})
	.state('/userProfile', {
		url: '/userProfile',
		templateUrl: 'templates/userProfileTmpl.html',
		controller: 'userProfileCtrl'
	})
	.state('/search', {
		url: '/searchresults',
		templateUrl: 'templates/searchTmpl.html',
		controller: 'searchCtrl'
	})
	.state('/login', {
		url: '/login',
		templateUrl: 'templates/loginTmpl.html',
		controller: 'loginCtrl'
	})
	.state('/register', {
		url: '/register',
		templateUrl: 'templates/registerTmpl.html',
		controller: 'registerCtrl'
	})
	.state('/institution', {
		url: '/institution',
		templateUrl: 'templates/institutionTmpl.html',
		controller: 'institutionCtrl'
	});

	$urlRouterProvider.otherwise('/home');

})

