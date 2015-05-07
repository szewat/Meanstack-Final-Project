galleryApp.controller("pageControllers", function($scope){

$scope.portfolio = [

{
author: 'universe511', 
title: 'Flower on Still Water', 
description: 'Floating on a distant faraway sea, I think of you', 
imageurl: 'images/still-life/stilllife1.jpg' },

{
author: 'glassy8989', 
title: 'Green Leaves', 
description: 'This is all too much green.', 
imageurl: 'images/still-life/stilllife2.jpg' },

{
author: 'crystalballz1', 
title: 'Fantastical Dragon Wings', 
description: 'Mythology Dragons on a newly decorated landscape.', 
imageurl: 'images/still-life/stilllife3.jpg' }
];


});


// need to add in ng-toggle http://geniuscarrier.com/ng-toggle-in-angularjs/
// galleryApp.controller("topMenu", function($scope){
// 	$scope.custom = true;
// 	$scope.toggleCustom = function() {
// 		$scope.custom = $scope.custom === false ? true: false;
// });