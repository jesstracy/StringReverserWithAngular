angular.module("StringReverserAngularApp", [])
    .controller('SampleController', function($scope, $http) {
//        $scope.reverseString = function(stringToReverse) {
//            console.log("In reverseString method in ng controller...");
//
////            $http.get("/reverseString.json?stringToReverse=" + stringToReverse)
//            $http.get("/string-item.json?stringToReverse=" + stringToReverse)
//                .then(
//                    function successCallback(response) {
//                        console.log(response.data);
//                        console.log("Adding data to scope");
//                        $scope.myStringItem = response.data;
//                    },
//                    function errorCallback(response) {
//                        console.log("Unable to get data");
//                    });
//        };

        $scope.reverseString = function(stringToReverse) {
            console.log("In reverseString method in ng controller...");

//            $http.get("/reverseString.json?stringToReverse=" + stringToReverse)
            $http.get("/reverse.json?stringToReverse=" + stringToReverse)
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.stringItems = response.data;
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data");
                    });
        };

        // for if I make a show items button
        $scope.getAllStringItems = function() {
            console.log("In getAllStringItems() method in ng controller...");

            $http.get("/getAllStringItems.json")
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.stringItems = response.data;
                    },
                    function errorCallback(response) {
                    console.log("Unable to get data");
                    });
        };

//        $scope.myStringItem = {};


    });