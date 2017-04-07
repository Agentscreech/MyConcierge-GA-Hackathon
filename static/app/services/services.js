angular.module('App')
.factory('Provider', ["$http", function($http){
  return {
      getProviders: function() {
          var URL = '/api/providers/';
          var req = {
              url:URL,
              method: "GET"
          };
          return $http(req);
      },
      createProvider: function(params) {
          var URL = '/api/providers';
          var req = {
              url: URL,
              method: "POST",
              data: params
          };
          return $http(req).then(function(res){
              if(res.status !== 200){
                  return false;
              }
              return res.data;
          }, function error(res){
              return res;
          });
      }
  };
}])
.factory('Listing', ["$http", function($http){
    return{
        getListings: function() {
        var URL = '/api/listings/';
        var req = {
            url:URL,
            method: "GET"
        };
        return $http(req);
    },
        createListing: function(params){
            var URL = '/api/listings';
            var req = {
                url:URL,
                method: "POST",
                data: params
            };
            return $http(req).then(function(res){
                if(res.status !== 200){
                    return false;
                }
                return res.data;
            }, function error(res){
                return res;
            });
        }

    };

}]);
