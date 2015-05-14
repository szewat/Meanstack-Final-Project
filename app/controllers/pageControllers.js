
// need to add in ng-toggle for Mobile http://geniuscarrier.com/ng-toggle-in-angularjs/
// galleryApp.controller("topMenu", function($scope){
// 	$scope.custom = true;
// 	$scope.toggleCustom = function() {
// 		$scope.custom = $scope.custom === false ? true: false;
// });



// // =======TESTING ON PUSHING BASE ON CLASS NOTES=======
  galleryApp.controller("pageControllers", function($scope, FIREBASE_URL, $firebaseArray, $firebaseObject){

    $scope.stilllifes = [];
    $scope.landscapes = [];

    var ref = new Firebase(FIREBASE_URL);
    var poststillRef = ref.child('stilllifes');    
    var postRef = ref.child('landscapes');

    $scope.stilllifes = $firebaseArray(poststillRef);
    $scope.landscapes = $firebaseArray(postRef);

    console.log(postRef.key());

    postRef.on('value', function(snapshot){
      console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read operation failed: " + errorObject.code);
      });

    var imageUpped;

    $scope.addImage = function(new_image){
    filepicker.setKey("Acr9ffQtqQwuPndnmuNU8z");
    filepicker.pick(
      {
        mimetypes: ['image/*', 'text/plain'],
        container: 'window',
        services:['COMPUTER'],
      },
      function(Blob){
        // console.log(JSON.stringify(Blob));
        imageUpped = Blob.url;
        console.log(imageUpped);
      },
      function(FPError){
        console.log(FPError.toString());
      }
    );
    }




    //pushing is important, this is how info is delivered onto the server
    $scope.addPortfolio = function(new_portfolio){
      var pushRef = new Firebase(FIREBASE_URL + '/landscapes');
      pushRef.push({
        name: new_portfolio.name,
        creationDate: Firebase.ServerValue.TIMESTAMP,
        title: new_portfolio.title,
        description: new_portfolio.description,
        imageurl: imageUpped
      });

    };



// For the still-life section
    // poststillRef.set({
    // 'universe511' : {
    // author: 'universe511', 
    // title: 'Flower on Still Water', 
    // description: 'Floating on a distant faraway sea, I think of you', 
    // imageurl: 'images/still-life/still-life1_200px.jpg' },

    // 'glassy8989' : {
    // author: 'glassy8989', 
    // title: 'Green Leaves', 
    // description: 'This is all too much green.', 
    // imageurl: 'images/still-life/still-life2_200px.jpg' },

    // 'crystalballz1' : {
    // author: 'crystalballz1', 
    // title: 'Fantastical Dragon Wings', 
    // description: 'Mythology Dragons on a newly decorated landscape.', 
    // imageurl: 'images/still-life/still-life3_200px.jpg' }

    // });


// For the landscape section
    // postRef.set({
    // 'blackbird892' : {
    // author: 'blackbird892', 
    // title: 'Botanical Garden', 
    // description: 'Floating on a distant faraway sea, I think of you', 
    // imageurl: 'images/landscape/landscape1_200px.jpg' },

    // 'iso9001' : {
    // author: 'iso9001', 
    // title: 'Mystical Dragon', 
    // description: 'Fantasical universe farscape.', 
    // imageurl: 'images/landscape/landscape2_200px.jpg' },

    // 'devtester928' : {
    // author: 'devtester928', 
    // title: 'Gardenscape', 
    // description: 'Summer day and cool landscaping.', 
    // imageurl: 'images/landscape/landscape3_200px.jpg' }

    // });

    $scope.addPortfolio = function( new_portfolio ) {
      $scope.portfolios.push( new_portfolio );
      $scope.add_portfolio = {};
    };

  });

// =======TESTING ON PUSHING BASE ON CLASS NOTES=======

// $scope.list = {
//   landscape : 'Landscape',
//   stilllife : 'Still Life',
// };


