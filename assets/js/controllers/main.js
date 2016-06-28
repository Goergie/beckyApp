var dreamListApp = angular.module("dreamListApp", ["httpUser", "httpBucketlist", "httpItem", "ngRoute", "ui.bootstrap", "UserSession"]);

dreamListApp.config(function($routeProvider) {
$routeProvider
//   // route for the home page
  .when("/", {
      templateUrl : "pages/index.html"
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

  $scope.isLoggedIn = function(){
      if(session.user.token == null || session.user.token == ""){
        return false;
      }
      else {
        $scope.username = session.user.name;
        return true;
      }
  };"$location",

  $scope.logout = function(){
    session.destroy();
    $location.path("/");
  };


}]);


dreamListApp.filter("capitalize", function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

// dreamListApp.run(['$rootScope', '$injector',"$window", function($rootScope,$injector, $window) {
//     $injector.get("$http").defaults.transformRequest = function(data, headersGetter) {
//         if (!$window.sessionStorage.token) headersGetter()['Authorization'] = "token "+ "ll";
//         if (data) {
//             return angular.toJson(data);
//         }
//     };
// }]);

// dreamListApp.run( function($rootScope, $location, $window) {
//   // register listener to watch route changes
//   $rootScope.$on( "$routeChangeStart", function(event, next, current) {
//     if ($window.sessionStorage.loggedIn == false ) {
//       // no logged user, we should be going to #login
//       if ( next.templateUrl == "pages/login.html" ||  next.templateUrl == "pages/signup.html" || next.templateUrl == "pages/index.html" ) {
//         // already going to #login, no redirect needed
//       } else {
//         // not going to #login, we should redirect now
//         $location.path( "/login" );
//       }
//     }
//   });
// })

