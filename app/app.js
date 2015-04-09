var galleryApp = angular.module ("galleryApp",["ngRoute","appControllers"]);

var appControllers = angular.module ("appControllers", []);

galleryApp.config(["$routeProvider", function($routeProvider){
	$routeProvider.
		when("/still-life",{
			templateUrl: "pages/still-life.html",
			controller: "pageControllers"
		}).
		when("/landscape",{
			templateUrl: "pages/landscape.html",
			controller: "pageControllers"
		}).
		when("/about",{
			templateUrl: "pages/about.html",
			controller: "pageControllers"
		}).
		when("/home",{
			templateUrl: "pages/home.html",
			controller: "pageControllers"
		}).
		otherwise ({
			redirectTo:"/home"
		});

}]);