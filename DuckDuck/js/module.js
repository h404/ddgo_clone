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

      app.directive('ngShowmore', function () {
          return {
              link: function ($scope, element, attrs) {
                  
                  var scope = $scope;
                  var parent = element.parent();
                  var paragrap = parent.find('p');
                  var showmore = parent.find('.show_more');
                  var hideit = parent.find('.hide_it');

                  var show = function () {
                      hideit.show();
                      showmore.hide();
                      parent.css({ 'overflow': 'visible' });
                  };

                  var hide = function () {
                      hideit.hide();
                      showmore.show();
                      parent.css({ 'overflow': 'hidden' });
                  };

                  var topparent = parent.parent();

                  $scope.$watch('head', function () {
                      //if (paragrap.height() > parent.height()) {
                          hide();
                      //}

                      showmore.click(show);
                      hideit.click(hide);
                  });

                  $(paragrap).resize(function () {

                     
                  });

              }
          };
      });
  });
