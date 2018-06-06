(function() {
    //  var app = angular.module('myApp', []);
    app.factory('mySrv1', ['$timeout', '$q', '$http', function($timeout, $q, $http) {

        var service = {};

        var request = {
            method: 'get',
            url: 'status.json',
            contentType: 'application/json',
            datatype: 'json'
        }
        service.getStudentsInfo = function() {
            var obj = $q.defer();
            $timeout(function() {
                $http(request).then(function success(response) {
                    // successfull response from status.json
                    obj.resolve(response.data.students); // data : {students : []}
                }, function failure(errorMessage) {
                    obj.reject("Some error");
                }, function notify(message) {
                    obj.notify("Please wait processing!!");
                })
            }, 10000);

            return obj.promise;
        }

        // $http.get('app.json').then();



        return service;

    }])
})();