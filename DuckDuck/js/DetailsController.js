//app.controller("DetailsController", function ($scope) {

//});

define([], function () {
 
    function DetailsController($scope,$routeParams,SearchFactory) {
        
        
        var result = SearchFactory.getResult($routeParams.query).then(function (data) {
            
        });
    }

    DetailsController.$inject = ['$scope','$routeParams','SearchFactory'];

    return DetailsController;

});