//app.controller("DetailsController", function ($scope) {

//});

define([], function () {
 
    function DetailsController($scope,$routeParams,SearchFactory) {
        
        var massageData = function (data) {
            
            var head = {

            };

            if(data.Image != "")
            {
                head.mainimg = data.Image;
            }
            else
            {
                //Need to handle no image scenario
            }

            if (data.Heading != "") {
                head.title = data.Heading;
            }
            else {
                //Need to handle
            }

            if (data.AbstractText != "") {
                head.description = data.AbstractText;
            }
            else {

            }



            $scope.head = head;
            $scope.IsDetails = true;


            var rt = {

            };

            if (data.RelatedTopics && data.RelatedTopics.length>0) {

                rt.list = data.RelatedTopics.length > 6 ? data.RelatedTopics.slice(0, 5) : data.RelatedTopics;
                $scope.rt = rt;
                $scope.IsRelatedTopic = true;
            }

            

          
        };

        var result = SearchFactory.getResult($routeParams.query).then(function (data) {
            //$scope.$apply(function () {
                massageData(data);
            //});
        });

        $scope.IsDetails = false;
        $scope.IsRelatedTopic = false;
    }

    DetailsController.$inject = ['$scope','$routeParams','SearchFactory'];

    return DetailsController;

});