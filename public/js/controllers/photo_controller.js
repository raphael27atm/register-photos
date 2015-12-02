(function() {
  'use strict';
  angular
    .module('app')
    .controller('photoCtrl',photoCtrl);

  function photoCtrl($scope, $http){
    $scope.photos = [];

    $scope.filtro = '';

    $http.get('api/v1/photos')
    .success(function(photos){
      $scope.photos = photos;
    })
    .error(function(err){
      console.log(err);
    });
  };

})();
