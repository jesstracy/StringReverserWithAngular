angular.module("StringReverserAngularApp", [])
    .controller('SampleController', function($scope, $http) {
        $scope.reverseString = function() {
            console.log("In reverseString method in ng controller...");
        }
    })