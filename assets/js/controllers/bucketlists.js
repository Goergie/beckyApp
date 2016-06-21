dreamListApp.controller("BucketlistController", ["$scope", "bucketlist", "$routeParams", function($scope, bucketlist, $routeParams){
    $scope.init = function(){
      $scope.bucketlistParams = {name: ""};
      $scope.bucketlists = [];
      $scope.getAllBucketlists();
    };

    $scope.createBucketlist = function(){
      bucketlist.create($scope.bucketlistParams)
      .then(function(response){
        console.log(response.bucketlist.name);
        //success
      }, function(err, status){
        console.log(err);
      })
    };

    $scope.getAllBucketlists = function(){
      bucketlist.all()
      .then(function(response){
        $scope.bucketlists = response.bucketlists;
        //success
      }, function(err, status){
        console.log(err);
      })
    };

    $scope.show = function(){
      bucketlist.get(id)
      .then(function(response){
        $scope.bucketlist = response.bucketlist;
        console.log($scope.bucketlist);
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

