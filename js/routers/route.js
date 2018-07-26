var app = angular.module('dataVisualization');

app.config(function($routeProvider,$locationProvider) {

	   $locationProvider.hashPrefix('');
	   $routeProvider
	    .when("/", {
	        templateUrl : "index2.html",
	        controller : "dataVisualizationController"
	    })
	    .when("/yelp", {
	        templateUrl : "playerVsPlayer.html",
	        controller : "playerVsPlayerController"
	    })
	    .otherwise({
	        template : "<center><h1>404 No found Error</h1><p>Nothing has been selected</p></center>"
	    });

	    //$locationProvider.html5Mode(true);
});
