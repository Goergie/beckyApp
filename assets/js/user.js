(function() {
  var app = angular.module("userRegistration", []);

  app.controller("UserController", ["$http", "$scope", function($http, $scope){
    $scope.user = {};

    $scope.createUser = function(){
        user = {name: "aa", email: "www.dd.com", password: "2"};
        $http.post("https://dreamlist.herokuapp.com/api/v1/user/new", user).success(function(data){
          console.log(data);
        });
    };

    $scope.confirm = function(valid){
        $scope.valid = valid;
        if ($scope.user.password === $scope.user.passwordConfirm) {
          return $scope.valid && true;
        }
        else {
          return $scope.valid && false;
        }
    };

  }]);

})();
