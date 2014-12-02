
define([], function () {
 
    function DetailsController($scope,$routeParams,SearchFactory,$location) {
        
        var massageData = function (data) {
            
            var head = {

            };

            var IsHeading = false;
            var IsTitle = false;

            if(data.Image != "")
            {
                head.mainimg = data.Image;
                $scope.IsImg = true;
            }
            else
            {
                //Need to handle no image scenario
            }

            if (data.Heading != "") {
                head.title = data.Heading;
                IsHeading = true;
            }
            else {
                //Need to handle
                IsHeading = false;
            }

            if (data.AbstractText != "") {
                head.description = data.AbstractText;
                IsTitle = true;
               
            }
            else {
                IsTitle = false;
                $scope.rtfloat = 'left';
            }

            

            $scope.head = head;
            $scope.IsResult = true;
            if (IsTitle) {
                $scope.IsDetails = true;
            }

            $scope.IsTitle = IsTitle;
            $scope.IsHeading = IsHeading;

     
           

            var rt = {

            };

            if (data.RelatedTopics && data.RelatedTopics.length>0) {

                rt.list = data.RelatedTopics.length > 6 ? data.RelatedTopics.slice(0, 5) : data.RelatedTopics;
                $scope.rt = rt;
                $scope.IsRelatedTopic = true;
            }

            //Static result content , since it is not available in the given API

            var Results = [];

            Results.push({
                header: 'Facebook Inc',
                desc: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                favicon: 'https://duckduckgo.com/i/facebook.com.ico',
                site:'facebook.com'
            });

            Results.push({
                header: 'Facebook Inc',
                desc: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                favicon: 'https://duckduckgo.com/i/facebook.com.ico',
                site: 'facebook.com'
            });

            Results.push({
                header: 'Facebook Inc',
                desc: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                favicon: 'https://duckduckgo.com/i/facebook.com.ico',
                site: 'facebook.com'
            });

            Results.push({
                header: 'Facebook Inc',
                desc: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                favicon: 'https://duckduckgo.com/i/facebook.com.ico',
                site: 'facebook.com'
            });

            Results.push({
                header: 'Facebook Inc',
                desc: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                favicon: 'https://duckduckgo.com/i/facebook.com.ico',
                site: 'facebook.com'
            });

            $scope.Results = Results;
          
            if(!$scope.IsTitle && !$scope.IsRelatedTopic)
            {
                $scope.IsDetails = false;
                $scope.IsResult = false;
                $scope.IsNoResult = true;
            }
        };

        var clearAll = function () {
            $scope.IsDetails = $scope.IsResult = false;
        };
        $scope.rtfloat = 'right';
        $scope.IsNoResult = false;
        $scope.query = $routeParams.query;

        var result = SearchFactory.getResult($routeParams.query,function (data) {
            //$scope.$apply(function () {
                clearAll();
                massageData(data);
            //});
        });

        $scope.lasttext = $scope.query;

        $scope.Search = function () {
            if ($scope.query && $scope.query!=$scope.lasttext) {
                //$routeParams.query = $scope.query;
                $scope.lasttext = $scope.query;
                clearAll();
                $location.path($scope.query);
            }
        };
        clearAll();
        $scope.IsDetails = false;
        $scope.IsRelatedTopic = false;
    }

    DetailsController.$inject = ['$scope', '$routeParams', 'SearchFactory', '$location'];

    return DetailsController;

});