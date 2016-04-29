(function(){
	var app = angular.module('myApp',['ui.router']);
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'/app/templates/home.html'	
		}).state('about',{
			url:'/about',
			templateUrl:'/app/templates/about.html'
		});
	});
})();