(function() {
  angular.module('main', ['ngRoute']);
  .config(function($routeProvider){
    $routeProvider.when("/me",
      {
        templateUrl: "app.html",
        controller: "AppCtrl",
        controllerAs: "app"
      }
    );
  })

.controller('AppCtrl', function() {
  var self = this;
  self.message = "The app routing is working!";

})();
