angular.module("StringReverserAngularApp", [])
    .controller('SampleController', function($scope, $http) {
        $scope.reverseString = function(stringToReverse) {
            console.log("In reverseString method in ng controller...");

//            $http.get("/reverseString.json?stringToReverse=" + stringToReverse)
            $http.get("/string-item.json?stringToReverse=" + stringToReverse)
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.myStringItem = response.data;
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data");
                    });
        };


    });