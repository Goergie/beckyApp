dreamListApp.controller("ShowBucketlistController", ["$scope", "bucketlist", "$routeParams", "item", function($scope, bucketlist, $routeParams, item){
    $scope.init = function(){
      $scope.show($routeParams.id);
      $scope.params = { name: "" };
    };

    $scope.show = function(){
      bucketlist.get($routeParams.id)
      .then(function(response){
        $scope.bucketlist = response.bucketlist;
        var myEl = angular.element(document.querySelector("#mypg"));
        myEl.removeAttr('class');
        myEl.addClass($scope.setClass());
        //success
      }, function(err, status){
        console.log(err);
      })
    };

    $scope.setClass = function(){

      $scope.percentage = getpercentage($scope.bucketlist.items);
      switch(true) {
        case ( $scope.percentage >79):
           return "progress progress-success";
          break;
        case ( $scope.percentage >49 && $scope.percentage < 80):
           return "progress progress-info"
          break;
        case ( $scope.percentage > 19 && $scope.percentage < 50):
           return "progress progress-warning";
          break;
        case ( $scope.percentage > 0 && $scope.percentage < 20 ):
           return "progress progress-danger";
          break;
        default:
            return "progress progress-danger";
      }
    }

    $scope.additem = function(){
      bucketlist.addItem($scope.bucketlist.id, $scope.params)
      .then(function(response){
        $scope.init();
        //success
      }, function(err, status){
        console.log(err);
      })
    };

    $scope.markItemDone = function(id){
      item.markDone($scope.bucketlist.id, id)
      .then(function(response){
        $scope.init();
        //success
      }, function(err, status){
        console.log(err);
      })
    };

    $scope.deleteItem = function(id){
      item.delete($scope.bucketlist.id, id)
      .then(function(response){
        $scope.init();
        //success
      }, function(err, status){
        console.log(err);
      })
    };

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
        return parseInt((done/total * 100));
      }
    };

    $scope.init();

    $scope.get_date = function(date) {
      var my_date = new Date(date);
      return my_date;
    }
}]);

