define(['js/config',
  'js/MainController',
  'js/DetailsController',
  'js/SearchFactory'],

  function (config, MainController, DetailsController, SearchFactory) {
      var app = angular.module('app', ['ngRoute']);
      app.config(config);
      app.controller('MainController', MainController);
      app.controller('DetailsController', DetailsController);
      app.factory('SearchFactory', SearchFactory);

      app.directive('ngEnter', function () {
          return function (scope, element, attrs) {
              element.bind("keydown keypress", function (event) {
                  if (event.which === 13) {
                      scope.$apply(function () {
                          scope.$eval(attrs.ngEnter);
                      });

                      event.preventDefault();
                  }
              });
          };
      });
  });
