(function() {
  var app = angular.module("userApp", ["httpUser"]);

  app.controller("UserController", ["$scope", "user", function($scope, user){
    $scope.init = function(){
      $scope.regUser = {};

    };

    $scope.createUser = function(){
      user.createUser($scope.regUser)
      .then(function(response){
        console.log(response);
        //success
      }), function(err, status){
        console.log(err);
      }

    };

    $scope.confirm = function(valid){
        $scope.valid = valid;
        if ($scope.regUser.password === $scope.regUser.passwordConfirm) {
          return $scope.valid && true;
        }
        else {
          return $scope.valid && false;
        }
    };

    $scope.init();

  }]);

})();
