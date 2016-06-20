dreamListApp.controller("UserController", ["$scope", "user", "$window", "$location", function($scope, user, $window, $location){
    $scope.init = function(){
      $scope.regUser = {};
      $scope.loginUser = {};
      $scope.error = "";
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
        $window.sessionStorage.token = response.token;
        $window.sessionStorage.loggedIn = true;
        $location.path( "/bucketlists" );
        //success
      }, function(err, status){
        $scope.error = "Invalid Email/Password";
      })
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

    $scope.logout = function(){
      $window.sessionStorage.token = "";
      $window.sessionStorage.loggedIn= false;
    };

    $scope.init();

}]);
