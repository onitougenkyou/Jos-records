/**
 * Created by davinazz on 15/02/2017.
 */

appchat.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/signup', {
            templateUrl: 'app/views/signup.html',
            controller: 'UserController'
        })

        .when('/login', {
            templateUrl: 'app/views/login.html',
            controller: 'UserController'
        })

        .when('/profiles', {
            templateUrl: 'app/views/profil.html',
            controller: 'profilController'
        })

        .when('/conversation/messages/createView', {
          templateUrl: 'app/views/conversation/createView.html',
          controller: 'createController'
        })

        .when('/conversation/messages/:id', {
          templateUrl: 'app/views/chat.html',
          controller: 'chat/conversationController'
        })

        .when('/signup_success', {
            templateUrl: 'app/views/signup_success.html'
        })

        .when('/login_success', {
            templateUrl: 'app/views/login_success.html'
        })

        .when('/conversation/messages/:id', {
          templateUrl: 'app/views/conversation/viewConversation.html',
          controller : 'conversation/viewController'
        })

        .otherwise({redirectTo : '/'})
});
