// <reference path="../node_modules/angular/angular.js" />
var app = angular.module('propApp', []);

app.controller('propController', ['$scope', '$http', function($scope, $http) {

    $scope.init = function() {
        $http.get('properties.json').
        then(function(response) {

            $scope.properties = response.data; // All the pr
            console.log($scope.properties);
        })
    }


    $scope.min = 300000;
    $scope.max = 1000000;


    console.log("user entered data:" + $scope.filterObj);

    // default empty object
    $scope.filterObj = {};
    $scope.filterObj.City = 'All';

}]);
app.filter('propFilter', function() {
    return function(data, optionalParam1) { // data - all properties, optionalParam1 - selectedValue
        var filteredProp = [];
        console.log(optionalParam1);
        // loop through the all properties and check the price of each prop.
        if (data != undefined) {
            for (var i = 0; i < data.length; i++) {
                // if prop price is lesser than the selected value? 
                if (data[i].Price <= optionalParam1.price) {
                    if (optionalParam1.City !== 'All') { // By default city is All, if not filter it based on selected city

                        if (data[i].City == optionalParam1.City) {
                            if (optionalParam1.Bed != undefined) {
                                // data[i].Bed will give you actual bed value
                                switch (data[i].Bed) { // 2 will be the value for 1st iteration
                                    // optionalParam1.Bed.oneBed will be true if user selected 1Bed Checkbox
                                    case 1:
                                        if (optionalParam1.Bed.oneBed == true) {
                                            filteredProp.push(data[i]);
                                        }
                                        break;
                                        // optionalParam1.Bed.twoBed will be true if user selected 2Bed Checkbox
                                    case 2:
                                        if (optionalParam1.Bed.twoBed == true) {
                                            filteredProp.push(data[i]);
                                        }
                                        break;
                                        // optionalParam1.Bed.threeBed will be true if user selected 3Bed Checkbox
                                    case 3:
                                        if (optionalParam1.Bed.threeBed == true) {
                                            filteredProp.push(data[i]);
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                filteredProp.push(data[i]);
                            }
                        }
                    } else if (optionalParam1.Bed !== undefined) {
                        switch (data[i].Bed) { // 2 will be the value for 1st iteration
                            // optionalParam1.Bed.oneBed will be true if user selected 1Bed Checkbox
                            case 1:
                                if (optionalParam1.Bed.oneBed == true) {
                                    filteredProp.push(data[i]);
                                }
                                break;
                                // optionalParam1.Bed.twoBed will be true if user selected 2Bed Checkbox
                            case 2:
                                if (optionalParam1.Bed.twoBed == true) {
                                    filteredProp.push(data[i]);
                                }
                                break;
                                // optionalParam1.Bed.threeBed will be true if user selected 3Bed Checkbox
                            case 3:
                                if (optionalParam1.Bed.threeBed == true) {
                                    filteredProp.push(data[i]);
                                }
                                break;
                            default:
                                break;
                        }
                    } else {
                        filteredProp.push(data[i]);

                    }
                }
            }
        }
        // console.log(filteredProp);

        return filteredProp;

    }
})