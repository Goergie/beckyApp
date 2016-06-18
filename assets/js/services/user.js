(function() {

  var app = angular.module('httpUser', [])
  app.service("user", function user($http, $q){

    var user = this;
    user.userdetails = {};

    user.create = function(user){
      var defer = $q.defer();
      $http.post("https://dreamlist.herokuapp.com/api/v1/user/new", user)
      .success(function(response){
        user.userdetails = response.user
        defer.resolve(response.user);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    user.login = function(user){
      var defer = $q.defer();
      $http.post("https://dreamlist.herokuapp.com/api/v1/auth/login", user)
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    user.LogoutUser = function(){
      var defer = $q.defer();
      $http.post("https://dreamlist.herokuapp.com/api/v1/auth/logout")
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    return user;
  });

})();
