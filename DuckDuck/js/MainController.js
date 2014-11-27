define([], function () {

    function MainController($scope, $location) {
        $scope.Search = function () {
            if($scope.query)
            {
                $location.path('/search').search({query:$scope.query});
            }
        };
    }

    MainController.$inject = ['$scope', '$location'];

    return MainController;

});