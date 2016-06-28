dreamListApp.controller("BucketlistController", function($scope, bucketlist, $routeParams, $uibModal){
    $scope.init = function(){
      $scope.bucketlistParams = {name: ""};
      $scope.bucketlists = [];
      $scope.getAllBucketlists();
    };

    $scope.createBucketlist = function(){
      modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: "/pages/bucketlist/new91.html",
        controller: "BucketlistController",
      });

      modalInstance.result.then(function(){

        $scope.getAllBucketlists();

      }, function(){

        $scope.getAllBucketlists();
      });
    };

    $scope.editBucketlist = function(id, name){
      modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: "/pages/bucketlist/kk2.html",
        controller: "BucketlistController",
      });
          $scope.bucketlistParams.name = "lll";

      modalInstance.result.then(function(){

        $scope.getAllBucketlists();

      }, function(){

        $scope.getAllBucketlists();
      });
    };

    $scope.update = function() {
      bucketlist.update($scope.bucketlistParams)
        .then(function(response){
          console.log(response.bucketlist.name);
          modalInstance.dismiss("cancel");
          //success
        }, function(err, status){
          $scope.error = "Could not update Bucketlist"
      })
    };

     $scope.create = function() {
      bucketlist.create($scope.bucketlistParams)
        .then(function(response){
          console.log(response.bucketlist.name);
          modalInstance.dismiss('cancel');
          //success
        }, function(err, status){
          $scope.error = "Name already exists or is invalid"
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

    $scope.delete = function(id){
      bucketlist.delete(id)
      .then(function(response){
        $scope.dd = response;
        console.log($scope.dd);
        $scope.init();
        //success
      }, function(err, status){
        console.log(err);
      })
    };

    $scope.get_date = function(date) {
      var my_date = new Date(date);
      return my_date;
    }

    $scope.getLastThreeItems = function(items){
      var list = items.slice(0, 3);
      if (list.length < 3){
        for(i=0; i < (3-list.length); i++){
            list.push(" ");
        }
      }
      return list;
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
});

