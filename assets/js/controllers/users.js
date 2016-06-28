dreamListApp.controller("UserController", ["$scope", "user", "$location", "session", function($scope, user, $location, session){
    $scope.init = function(){
      $scope.regUser = {};
      $scope.loginUser = {};
      $scope.error = "";
    };

    $scope.createUser = function(){
      user.create($scope.regUser)
      .then(function(response){
        var username = response.user;
        var token = response.token;
        session.create(username, token);
        $location.path( "/bucketlists" );
        //success
      }), function(err, status){
        console.log(err);
      }
    };

    $scope.login = function(){
      user.login($scope.loginUser)
      .then(function(response){
        var username = response.user;
        var token = response.token;
        session.create(username, token);
        $location.path( "/bucketlists" );
        //success
      }, function(err, status){
        $scope.error = "Invalid Email/Password";
      })
    };

    $scope.init();

}]);
