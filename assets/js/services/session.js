(function() {

  var app = angular.module("UserSession", ["ngCookies"])
  app.service("session", function session($cookies){

    var session = this;
    session.user = {};
    session.user.name = $cookies.get("currentUser");
    session.user.token = $cookies.get("token");

    session.create = function(user, token){
      $cookies.put("token", token);
      $cookies.put("currentUser", user);
      session.setUser();
    }

    session.setUser = function(){
      session.user.name = $cookies.get("currentUser");
      session.user.token = $cookies.get("token");
    };

    session.destroy = function(){
      $cookies.remove("token");
      $cookies.remove("currentUser");
      session.user = {};
    };
    return session;
  });

})();
