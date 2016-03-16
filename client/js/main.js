  document.addEventListener("DOMContentLoaded", function(event) {
    getData();
  });

function getUsername() {
    var userName = $('#login').val();
    window.userName = userName;
    if ($('#login').val().length === 0) {
        alert('You did not enter a tweet to post!');
        return;
    } else {
        window.location.href = "#/tweets";
    }
};


function getData() {
    $.ajax({
        method: 'GET',
        url: 'messages',
    }).done(function(list) {
        var tweetList = JSON.stringify(list);
        window.tweetList = tweetList;
        console.log(tweetList);
    });
};


var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomeController'
        })
        .when('/tweets', {
            templateUrl: 'views/tweets.html',
            controller: 'TweetsController'
        });
}]);

