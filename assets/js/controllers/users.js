(function() {
  var app = angular.module("userApp", ["httpUser"]);

  app.controller("UserController", ["$scope", "user", function($scope, user){
    $scope.init = function(){
      $scope.regUser = {};
      $scope.loginUser = {};
    };

    $scope.createUser = function(){
      user.create($scope.regUser)
      .then(function(response){
        console.log(response);
        //success
      }), function(err, status){
        console.log(err);
      }
    };

    $scope.login = function(){
      user.login($scope.loginUser)
      .then(function(response){
        $scope.loginUser.token = response.token;
        console.log($scope.loginUser);
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
