(function() {

  var app = angular.module("httpBucketlist", [])
  app.service("bucketlist", function bucketlist($http, $q){

    var bucketlist = this;

    bucketlist.all = function(token){
      var defer = $q.defer();
      $http.get(
        "https://dreamlist.herokuapp.com/api/v1/bucketlists", {
          headers: "Authorization": 'token="1111"'
        }
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
      $http.get("https://dreamlist.herokuapp.com/api/v1/bucketlists/"+id)
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
      $http.post("https://dreamlist.herokuapp.com/api/v1/bucketlists", bucketlist)
      .success(function(response){
        defer.resolve(response);
      })
      .error(function(err, status){
        defer.reject(err);
      })

      return defer.promise;
    }

    bucketlist.update = function(id){
      var defer = $q.defer();
      $http.post("https://dreamlist.herokuapp.com/api/v1/bucketlists/"+id)
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
      $http.post("https://dreamlist.herokuapp.com/api/v1/bucketlists/"+id)
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
