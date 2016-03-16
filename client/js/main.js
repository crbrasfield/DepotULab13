  document.addEventListener("DOMContentLoaded", function(event) {

  });

// function getUsername() {
//     var userName = $('#login').val();
//     window.userName = userName;
//     if ($('#login').val().length === 0) {
//         alert('You did not enter a tweet to post!');
//         return;
//     } else {
//         window.location.href = "#/tweets";
//     }
// };


// function getData() {
//     $.ajax({
//         method: 'GET',
//         url: 'messages',
//     }).done(function(list) {
//         var tweetList = JSON.stringify(list);
//         window.tweetList = tweetList;
//         console.log(tweetList);
//     });
// };

// function postData() {
//     // console.log('1');
//     var user = (userName +': ');
//     var incTweet = {
//         text: $('#new-tweet').val(),
//         userName: userName,
//     };
//     console.log(incTweet);
//     $.ajax({
//         method: 'POST',
//         url: 'messages',
//         data: JSON.stringify(incTweet)
//     }).success(function() {
//         $('.incoming-tweets').prepend('<li>' + user + ' ' + incTweet.text + '</li>')
//     });
//     $('#new-tweet').val('');
// }


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

