(function() {

  var app = angular.module("httpBucketlist", ["UserSession"])
  app.service("bucketlist", function bucketlist($http, $q, $window, session, $rootScope){

    var bucketlist = this;

    bucketlist.all = function(){
      var defer = $q.defer();
      $http.get($rootScope.url + "bucketlists")
        .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        // console.log(err);
        // console.log(status);
        defer.reject(err);
      })

      return defer.promise;
    }

    bucketlist.get = function(id){
      var defer = $q.defer();
      $http.get($rootScope.url + "bucketlists/"+id)
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    };

    bucketlist.create = function(bucketlist){
      var defer = $q.defer();
      $http.post($rootScope.url + "bucketlists", bucketlist)
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    bucketlist.addItem = function(bucketlist_id, item){
      var defer = $q.defer();
      $http.post($rootScope.url + "bucketlists/"+bucketlist_id+"/items", item)
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    };

    bucketlist.update = function(id){
      var defer = $q.defer();
      $http.post($rootScope.url + "bucketlists/"+id)
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    bucketlist.delete = function(id){
      var defer = $q.defer();
      $http.delete($rootScope.url + "bucketlists/"+id)
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    return bucketlist;
  });

})();
