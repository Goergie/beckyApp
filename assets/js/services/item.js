(function() {

  var app = angular.module("httpItem", ["UserSession"])
  app.service("item", function bucketlist($http, $q, session, $rootScope){

    var item = this;

    item.create = function(bucketlist_id, item){
      var defer = $q.defer();
      $http.post($rootScope.url + "bucketlists/"+bucketlist_id+"/items", item, { "headers": { Authorization: 'token ' + session.user.token }})
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    item.delete = function(bucketlist_id, item_id){
      var defer = $q.defer();
       $http.delete($rootScope.url + "bucketlists/"+bucketlist_id+"/items/" + item_id, { "headers": { Authorization: 'token ' + session.user.token }})
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    item.markDone = function(bucketlist_id, item_id){
      console.log("here ");
      var item = { done: true }
      var defer = $q.defer();
      $http.put($rootScope.url + "bucketlists/"+bucketlist_id+"/items/" + item_id, item, { "headers": { Authorization: 'token ' + session.user.token }})
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    item.update = function(id){
      var defer = $q.defer();
      $http.post($rootScope.url + "bucketlists/"+id, { "headers": { Authorization: 'token ' + session.user.token }})
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    return item;
  });

})();
