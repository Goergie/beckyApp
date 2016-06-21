var dreamListApp = angular.module("dreamListApp", ["httpUser", "httpBucketlist", "ngRoute", ]);

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

  // route for creating bucketlist
    .when("/bucketlist/new", {
      templateUrl : "pages/bucketlist/new.html",
      controller  : "BucketlistController"
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

