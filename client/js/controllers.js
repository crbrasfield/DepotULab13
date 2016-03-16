


var controllers = angular.module('myApp.controllers', []);
controllers.controller('WelcomeController', ['$scope', '$rootScope', '$http', function($scope,$rootScope,$http) {


    $scope.logIn = function() {
        var userLogName = $('#login').val();
        $rootScope.userName = userLogName;
        if ($('#login').val().length === 0) {
            alert('You did not enter a tweet to post!');
            return;
        } else {
            window.location.href = "#/tweets";
        };
    };



}]);

controllers.controller('TweetsController', ['$scope','$rootScope', '$http', function($scope,$rootScope, $http) {
    console.log($rootScope.username);
    
    $scope.getData = function() {
        $http({
            method: 'GET',
            url: '/messages'
        }).success(function(list) {
            console.log(list);
            var tweetList = list;
            $scope.tweets = tweetList;
            console.log(tweetList);
        });
    };
    
    $scope.getData();

    $scope.postData = function() {
        var user = ($rootScope.username + ': ');
        var incTweet = {
            text: $('#new-tweet').val(),
            username: $rootScope.userName
        };
        console.log(incTweet);
        $http({
            method: 'POST',
            url: '/messages',
            data: incTweet
        }).success(function() {
            $scope.getData();
        });

    };

}]);