// var galleryApp = angular.module ("galleryApp",["ngRoute"]);

// firebase addition
var galleryApp = angular.module("galleryApp",["ngRoute","appControllers","firebase"]).
constant('FIREBASE_URL','https://sw-final-project.firebaseio.com/');

//extra line for controller since its already written in, maybe redundant
var appControllers = angular.module("appControllers", []);

galleryApp.config(["$routeProvider", function($routeProvider){
	$routeProvider
		.when("/stilllife",{
			templateUrl: "pages/stilllife.html",
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
		.when("/login",{
			templateUrl: "pages/login.html",
			controller: "registration"
		})
		.when("/register",{
			templateUrl: "pages/register.html",
			controller: "registration"
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


