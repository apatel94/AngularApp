(function() {
    //  var app = angular.module('myApp', []);
    app.factory('mySrv', ['$timeout', '$q', function($timeout, $q) {

        var service = {};

        // ashynchronous method (2)
        service.addition = function(a, b) {
            var obj = $q.defer(); //(3)

            $timeout(function() {
                var response = "Additoin is :" + (a + b);
                //var response = "Additoin is :" + (a + b);
                //obj.resolve(response); // (5) returing response by resolving the promise
                obj.reject("Hey there is error!!");
            }, 5000);

            return obj.promise; //(4)
        }
        service.substract = function(a, b) {
            return "Substraction is :" + (a - b);
        }
        service.multiply = function(a, b) {
            return "Multiplication is :" + (a * b);
        }

        return service;

    }])

})();