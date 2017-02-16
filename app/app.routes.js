/**
 * Created by davinazz on 15/02/2017.
 */

appchat.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/signup', {
            templateUrl: 'app/views/signup.html',
            controller: 'SignupController'
        })
        .when('/profiles', {
            templateUrl: 'app/views/profil.html',
            controller: 'SignupController'
        })
        .when('/chat/:id', {
            templateUrl: 'app/views/chat.html',
            controller: 'chatController'
        })
        .otherwise({redirectTo : '/'})
});
