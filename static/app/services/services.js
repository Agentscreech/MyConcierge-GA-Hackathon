angular.module('App')
.factory('Provider', ["$resource", function($resource){
  return $resource('/api/provider/:id', {id: '@user_id'});
}]);
