galleryApp.controller("PortfolioDetailController", function($scope, $routeParams, FIREBASE_URL, $firebaseArray, $firebaseObject){
	$scope.landscape_username = $routeParams.landscape_username;

	var landscape_name = $routeParams.landscape_name;
	var pushImg = new Firebase(FIREBASE_URL + '/users/' + username);

	$scope.portfolios = $firebaseObject(pushImg);


    pushImg.set({ 
  		'blackbird892': [
  		{ filename: "landscape3_200px.jpg",
  		date: "2013/09/05",
  		description: "I love this boat, so much booty." },
 ]});



});
