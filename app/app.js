var galleryApp = angular.module ("galleryApp",["ngRoute"]);

// firebase addition
// var galleryApp = angular.module ("galleryApp",["ngRoute", "firebase"])/
// constant('FIREBASE_URL','https://sw-final-project.firebaseio.com/');

//extra line for controller since its already written in, redundant
// var PortfolioListController = angular.module('PortfolioListController', []);

galleryApp.config(["$routeProvider", function($routeProvider){
	$routeProvider
		.when("/still-life",{
			templateUrl: "pages/still-life.html",
			controller: "pageControllers"
		})
		.when("/landscape",{
			templateUrl: "pages/landscape.html",
			controller: "pageControllers"
		})
		.when("/about",{
			templateUrl: "pages/about.html",
			controller: "pageControllers"
		})
		.when("/home",{
			templateUrl: "pages/home.html",
			controller: "pageControllers"
		})
		.otherwise ({
			templateUrl: "pages/404.html",
			redirectTo:"/404"
		});

}]);

