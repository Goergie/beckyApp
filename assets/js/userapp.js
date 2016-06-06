(function() {
  var app = angular.module("userRegistration", []);

  app.controller("UserController", function(){
    this.name = "";
    this.email = "";
    this.password = "";

    this.createUser = function(){
        console.log(this.name);
        console.log(this.email);
        console.log(this.password);
        this.name = "";
        this.email = "";
        this.password = "";
        this.passwordConfirm = "";
    };

    this.confirm = function(valid){
        this.valid = valid;
        if (this.password === this.passwordConfirm) {
          return this.valid && true;
        }
        else {
          return this.valid && false;
        }
    };

  });

})();
