(function() {
  'use strict';
  angular
    .module('app')
    .config(config);

  function config($routeProvider){
    $routeProvider.when('/photos', {
      templateUrl: 'partials/essential.html',
      controller: 'photoCtrl'
    });
  }

})();
