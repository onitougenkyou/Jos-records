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


        .when('/CreatConversationView', {
          templateUrl: 'app/views/CreatConversation/CreatConversationView.html',
          controller: 'CreatConversationController'
        })

        .when('/conversation/messages/:id', {
          templateUrl: 'app/views/chat.html',
          controller: 'conversationController'
        })


        .when('/profilService/:id', {
            templateUrl: 'app/views/profil.html',
            controller: 'profilController'
        })

        .otherwise({redirectTo : '/'})
});
