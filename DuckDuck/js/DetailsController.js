//app.controller("DetailsController", function ($scope) {

//});

define([], function () {
 
    function DetailsController($scope,$routeParams,SearchFactory) {
        
        var massageData = function (data) {
            
            var head = {

            };

            if(data.Image != "")
            {
                $scope.head.mainimg = data.Image;
            }
            else
            {
                //Need to handle no image scenario
            }

            if (data.Heading != "") {
                $scope.head.title = data.Heading;
            }
            else {
                //Need to handle
            }

            if (data.AbstractText != "") {
                $scope.head.description = data.AbstractText;
            }
            else {

            }



            $scope.head = head;
        };

        var result = SearchFactory.getResult($routeParams.query).then(function (data) {
            //$scope.$apply(function () {
                massageData(data);
            //});
        });
    }

    DetailsController.$inject = ['$scope','$routeParams','SearchFactory'];

    return DetailsController;

});