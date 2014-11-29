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

                  var descparent = element.find('.media-body');
                  var desc = element.find('.head_description');
                  var h3 = element.find('h3');
                  var p = element.find('p');
                  var showmore = element.find('.show_more');
                  var hideit = element.find('.hide_it');
                  var xTopOff = 60;

                  var scope = $scope;

                  var show = function () {
                      hideit.show();
                      showmore.hide();
                  };

                  var hide = function () {
                      hideit.hide();
                      showmore.show();
                  };

                  var showmoreClick = function () {

                      p.animate({ height: p.get(0).scrollHeight });
                      //p.height(p.get(0).scrollHeight);
                      //p.css({ overflow: 'visible' });
                      show();
                  };

                  var hideitClick = function () {
                      scopeWatch(true);
                  };

                  showmore.click(showmoreClick);
                  hideit.click(hideitClick);

                  var scopeWatch = function (isanimate) {

                      var parentheight = element.height();
                      var headheight = h3.height();
                      var pheight = p.get(0).scrollHeight;
                      var mainbodyheight = descparent.height();
                      
                      if (pheight - headheight  > parentheight) {
                          var diff = parentheight - headheight - xTopOff;
                          if (!isanimate) {
                              p.height(diff);
                              p.css({ overflow: 'hidden' });
                          }
                          else {
                              p.animate({ height:diff });
                          }
                         
                          hide();
                      }
                      else {
                          showmore.hide();
                      }
                      
                  };

                  window.onresize = function () {
                      scopeWatch();
                  };

                 // scopeWatch();

                  $scope.$watch('head', function (newValue, oldValue) {


                      scopeWatch();

                  });
              }
          };
      });

      app.directive('ngRt', function () {
          return {
              link: function ($scope, element, attrs) {

                 
                  var list = element.find("ul");
                  var well = element.find(".well");
                  var xOff = 20;
                  var isexpanded = false;


                  well.click(function () {
                      //list.height(diff);
                      if (!isexpanded) {
                          
                          list.animate({ height: list.get(0).scrollHeight });
                      }
                      else {
                          scopeWatch(true);
                      }
                      isexpanded = !isexpanded;
                  });

                  var scopeWatch = function (isanimate) {
                     

                      var parentheight = element.height();
                      var listheight = list.get(0).scrollHeight;
                      var wellheight = well.height();

                      if (listheight + wellheight > parentheight) {

                          var diff = parentheight - wellheight - xOff;
                          if (!isanimate) {
                              list.height(diff);
                              list.css({ overflow: 'hidden' });
                          }
                          else {
                              list.animate({ height: diff });
                          }
                      }
                      else {
                          well.hide();
                      }

                  };


                  window.onresize = function () {
                      scopeWatch();
                  };

                  // scopeWatch();

                  $scope.$watch('rt', function (newValue, oldValue) {


                      scopeWatch();

                  });

              }
          }
      });

      app.directive('ngDivide', function () {
          return {
              link: function ($scope, element, attrs) {

                  var sizing=function()
                  {
                      //var topplace = element.find('.top_place');
                      var search = element.find('.search');

                      var topplaceheight = (($(window).height() / 2) - search.height()) / 2;
                      $('.top_place').height(topplaceheight);

                  }

                  sizing();

                  window.onresize = sizing;
              }
          }
      });
    
  });
