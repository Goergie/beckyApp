dreamListApp.controller("ShowBucketlistController", ["$scope", "bucketlist", "$routeParams", function($scope, bucketlist, $routeParams){
    $scope.init = function(){
      $scope.show($routeParams.id);
      $scope.today = new Date();
    };

    $scope.show = function(){
      bucketlist.get($routeParams.id)
      .then(function(response){
        $scope.bucketlist = response.bucketlist;
        var myEl = angular.element(document.querySelector('#pg'));
        myEl.addClass($scope.setClass());

        console.log($scope.bucketlist.items);
        //success
      }, function(err, status){
        console.log(err);
      })
    };

    $scope.setClass = function(){

      $scope.percentage = getpercentage($scope.bucketlist.items);
      console.log($scope.percentage)
      switch(true) {
        case ( $scope.percentage >79):
           return "progress-bar progress-bar-success";
          break;
        case ( $scope.percentage >49):
           return "progress-bar progress-bar-info"
          break;
        case ( $scope.percentage > 20):
           return "progress-bar progress-bar-warning";
          break;
        default:
            return "progress-bar progress-bar-danger";
      }
    }

    var getpercentage = function(items){
      if (items.length === 0){
        return 0
      }
      else{
        var undone = 0;
        var done = 0;
        var total = items.length;
        for(i=0; i<items.length; i++){
          if(items[i].done == true){
            done += 1;
          }
        }
        return (done/total * 100);
      }
    };

    $scope.init();
}]);

