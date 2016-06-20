dreamListApp.controller("BucketlistController", ["$scope", "bucketlist", "$window", function($scope, bucketlist){
    $scope.init = function(){
      $scope.bucketlistParams = {name: ""};
      $scope.bucketlists = {}
      $scope.getAllBucketlists();
    };

    $scope.createBucketlist = function(){
      console.log($scope.bucketlistParams.name);
      bucketlist.create($scope.bucketlistParams)
      .then(function(response){
        console.log(response);
        //success
      }, function(err, status){
        console.log(err);
      }
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

