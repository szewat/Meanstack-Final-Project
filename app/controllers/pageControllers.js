// =================WHAT I REALLY WANT TO PUSH==========================
galleryApp.controller("pageControllers", function($scope,

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


// });


// need to add in ng-toggle http://geniuscarrier.com/ng-toggle-in-angularjs/
// galleryApp.controller("topMenu", function($scope){
// 	$scope.custom = true;
// 	$scope.toggleCustom = function() {
// 		$scope.custom = $scope.custom === false ? true: false;
// });




// //galleryApp.controller("pageControllers", function($scope, FIREBASE_URL, $firebaseArray, $firebaseObject){



// // =======TESTING ON PUSHING BASE ON CLASS NOTES=======
//     var ref = new Firebase(FIREBASE_URL);
//     var postRef = ref.child('portfolios');

//     $scope.portfolios = $firebaseArray(postRef);

//     console.log(postRef.key());

//     postRef.on('value', function(snapshot){
//       console.log(snapshot.val());
//       }, function (errorObject) {
//         console.log("The read operation failed: " + errorObject.code);
//       });

//     var imageUpped;

//     $scope.addImage = function(new_image){
//     filepicker.setKey("AmLcWLY62RNK9TLhg66Gmz");
//     filepicker.pick(
//       {
//         mimetypes: ['image/*', 'text/plain'],
//         container: 'window',
//         services:['COMPUTER'],
//       },
//       function(Blob){
//         // console.log(JSON.stringify(Blob));
//         imageUpped = Blob.url;
//         console.log(imageUpped);
//       },
//       function(FPError){
//         console.log(FPError.toString());
//       }
//     );
//     }




//     //pushing is important, this is how info is delivered onto the server
//     $scope.addPortfolio = function(new_portfolio){
//       var pushRef = new Firebase(FIREBASE_URL + '/portfolios');
//       pushRef.push({
//         name: new_portfolio.name,
//         creationDate: Firebase.ServerValue.TIMESTAMP,
//         title: new_portfolio.title,
//         description: new_portfolio.description,
//         imageurl: imageUpped
//       });

//     };


    // postRef.set({
    //   'vessel1309' : {
    //   name: 'vessel1309', 
    //   title: 'Call of Booty', 
    //   date: '2013-09-01', 
    //   description: 'Arrrgh mateys! This be the finest vessel sailing these seas that yer eyes ever laid sight on. Arrrgh.', 
    //   imageurl: 'images/drunkenPirate_thumb3.png' },

    //   'innocents1404' : {
    //   name: 'innocents1404', 
    //   title: 'The Sack of the Innocents', 
    //   date: '2014-04-15', 
    //   description: 'This be a detail of the sacking of the innocents where I played an important role as business analyst and in implementation.', 
    //   imageurl: 'images/drunkenPirate_thumb2.png' },

    //   'firstmate1210' : {
    //   name: 'firstmate1210', 
    //   title: 'Pipe and First Mate', 
    //   date: '2012-10-01', 
    //   description: 'After a hard day of lootin\' and shootin\' I like to relax with my best mates and tally up the days booty.', 
    //   imageurl: 'images/drunkenPirate_thumb1.png' }

    //   });

    // $scope.addPortfolio = function( new_portfolio ) {
    //   $scope.portfolios.push( new_portfolio );
    //   $scope.add_portfolio = {};
    // };
// });

// =======TESTING ON PUSHING BASE ON CLASS NOTES=======



