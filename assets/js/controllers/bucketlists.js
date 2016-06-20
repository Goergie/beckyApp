dreamListApp.controller("BucketlistController", ["$scope", "bucketlist", "$window", function($scope, bucketlist, $window){
    $scope.init = function(){
      $scope.bucketlistParams = { name: "latest" };
      $scope.bucketlists = {}
      $scope.getAllBucketlists();
    };

    $scope.createBucketlist = function(){
      alert("here");
      // bucketlist.create($scope.$scope.bucketlistParams)
      // .then(function(response){
      //   console.log(response);
      //   //success
      // }), function(err, status){
      //   console.log(err);
      // }
    };

    $scope.getAllBucketlists = function(){
      console.log("getting them ");
      bucketlist.all()
      .then(function(response){
        console.log("here");
        //success
      }, function(err, status){
        console.log(err);
      })
    };

    // $scope.confirm = function(valid){
    //     $scope.valid = valid;
    //     if ($scope.regUser.password === $scope.regUser.passwordConfirm) {
    //       return $scope.valid && true;
    //     }
    //     else {
    //       return $scope.valid && false;
    //     }
    // };
    $scope.init();
    // alert($window.sessionStorage.dreamlistToken);
}]);

