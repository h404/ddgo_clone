
define([], function () {

    function config($routeProvider) {
        $routeProvider.
          when('/', {
              templateUrl: 'partials/home.view.html',
              controller: 'MainController'
          }).
          when('/search/:query', {
              templateUrl: 'partials/details.view.html',
              controller: 'DetailsController'
          }).
          otherwise({
              redirectTo: '/'
          });
    }

    config.$inject = ['$routeProvider'];

    return config;
});