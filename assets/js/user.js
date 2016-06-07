(function() {
  var app = angular.module("userRegistration", []);

  app.controller("UserController", ["$http", function($http){
    this.user = {};

    this.createUser = function(){

        console.log(this.user);
        this.user = {};
        $http.get("https://dreamlist.herokuapp.com/api/v1/user/new").success(function(data){
          console.log(data);

        });
    };

    this.confirm = function(valid){
        this.valid = valid;
        if (this.user.password === this.user.passwordConfirm) {
          return this.valid && true;
        }
        else {
          return this.valid && false;
        }
    };

  }]);

})();
