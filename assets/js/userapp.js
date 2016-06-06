(function() {
  var app = angular.module("userRegistration", []);

  app.controller("UserController", function(){
    this.firstname = "";
    this.lastname = "";
    this.sex = "";

    this.createUser = function(){
        console.log(this.firstname);
        this.firstname = "";
        this.lastname = "";
        this.sex = "";
    };
  });

})();
