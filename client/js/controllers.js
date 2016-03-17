


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
    console.log($rootScope.userName);
    
    $scope.username = $rootScope.userName;
    
    $scope.getData = function() {
        $http({
            method: 'GET',
            url: '/messages'
        }).success(function(list) {
            console.log(list);
            var tweetList = list.reverse();
            $scope.tweets = tweetList;
            console.log(tweetList);
        });
    };
    
    $scope.getData();

    $scope.postData = function() {
        var user = ($rootScope.userName + ': ');
        var incTweet = {
            text: $('#new-tweet').val(),
            username: $rootScope.userName
        };
        if (incTweet.text.length == 0){
            alert('You must enter a tweet to post!')
            return;
        }else {
            console.log(incTweet);
        $http({
            method: 'POST',
            url: '/messages',
            data: incTweet
        }).success(function() {
            $('.incoming-tweets').prepend('<li>' + $scope.username + ': ' + $('#new-tweet').val() + '</li>')
            // $scope.getData();
            $('#new-tweet').val('');
        });
        }
        

    };

}]);