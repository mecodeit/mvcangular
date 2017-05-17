var angualarModule = angular.module("angualarModule", ['ngRoute']);
angualarModule.controller("indexController", function ($scope) {
    $scope.name = "Anubhav";
})
angualarModule.config(function ($routeProvider) {
    $routeProvider.
    when('/firstPage', {
        templateUrl: 'routedemo/first',
        controller: 'routeDemoFirstController'
    }).
    when('/secondPage', {
        templateUrl: 'routedemo/second',
        controller: 'routeDemoSecondController'
    })
})
angualarModule.controller("routeDemoFirstController", function ($scope) {
    $scope.FirstName = "Anubhav";
    $scope.LastName = "Chaudhary";
})
angualarModule.controller("routeDemoSecondController", function ($scope) {
    $scope.MobileNumber = "123456";
    $scope.EmailID = "anu@test.com";
})
//angualarModule.controller("routeDemoFirstController", function ($scope, $http) {

//    $http({
//        url: 'api/values/5',
//        dataType: 'json',
//        method: 'GET',
//        data: '',
//        headers: {
//            "Content-Type": "application/json"
//        }
//    }).success(function (response) {
//        alert(response);
//    }).error(function (err) {

//    })
//})
