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

     
  });
