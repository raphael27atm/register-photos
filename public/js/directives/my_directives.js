angular.module('myDirectives',[])
  .directive('myPanel', function(){
    var obj = {};

    obj.restric = "AE";

    obj.scope = {
      title: '@'
    };

    obj.transclude = true;

    obj.templateUrl = 'js/directives/my_panel.html';

    return obj;
  });
