var dreamListApp = angular.module("dreamListApp", ["httpUser", "httpBucketlist", "httpItem", "ngRoute", "ui.bootstrap", "UserSession"]);

dreamListApp.config(function($routeProvider) {
$routeProvider
//   // route for the home page
  .when("/", {
      templateUrl : "pages/index.html",
      controller: "mainController"
  })

  // route for the login
  .when("/login", {
      templateUrl : "pages/login.html",
      controller  : "UserController"
  })

  // route for the user creation
  .when("/register", {
      templateUrl : "pages/signup.html",
      controller  : "UserController"
  })

    //route for getting all bucketlist
  .when("/bucketlists", {
    templateUrl : "pages/bucketlist/index.html",
    controller  : "BucketlistController"
  })

  .when("/bucketlists/:id", {
    templateUrl : "pages/bucketlist/show.html",
    controller  : "ShowBucketlistController"
  })

  .when("/404", {
    templateUrl : "pages/404.html"
  })
  .otherwise({ redirectTo: "/404" });

})

dreamListApp.run(function($rootScope) {
    $rootScope.url = "https://dreamlist.herokuapp.com/api/v1/";
})

dreamListApp.controller("mainController", ["$scope", "session", "$location", function($scope, session, $location){
  $scope.redirect = function() {
    if(session.user.token){
      $location.path("/bucketlists");
    }
  };

  $scope.isLoggedIn = function(){
      if(session.user.token == null || session.user.token == ""){
        return false;
      }
      else {
        $scope.username = session.user.name;
        return true;
      }
  };

  $scope.logout = function(){
    session.destroy();
    $location.path("/");
  };

  $scope.redirect();

}]);


dreamListApp.filter("capitalize", function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

dreamListApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
}]);

dreamListApp.run(function($rootScope, $location, session) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if (session.user.token === "" || session.user.token == null ) {
        if ( next.templateUrl === "pages/login.html" || next.templateUrl === "pages/index.html" || next.templateUrl === "pages/signup.html") {
        } else {
          $location.path("/login");
        }
      }
    });
  });
