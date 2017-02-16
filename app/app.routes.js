/**
 * Created by davinazz on 15/02/2017.
 */

appchat.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/signup', {
            templateUrl: 'app/views/signup.html',
            controller: 'UserController'
        })
        /*.when('/profiles', {
            templateUrl: 'app/views/profil.html',
            controller: 'SignupController'
        })*/

        .when('/CreatConversationView', {
          templateUrl: 'app/views/CreatConversation/CreatConversationView.html',
          controller: 'CreatConversationController'
        })

        .otherwise({redirectTo : '/'})
});
