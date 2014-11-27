define([], function () {
    function SearchFactory($http, $q) {
        var deferred = $q.defer();
        var searchurl = "http://api.duckduckgo.com/?callback=JSON_CALLBACK&";


        var serialize = function (obj) {
            var str = [];
            for (var p in obj)
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            return searchurl+str.join("&");
        };

        var getResult = function (query) {
            var url = serialize({ q: query, format: 'json', pretty: 1 });
            $http.jsonp(url).success(function (data, status) {
                deferred.resolve(data);
            }).error(function (data, status) {
                deferred.reject(data);
            });

            return deferred.promise;
        };

        return {
            getResult:getResult
        };
    }

    SearchFactory.$inject = ['$http', '$q'];

    return SearchFactory;
});