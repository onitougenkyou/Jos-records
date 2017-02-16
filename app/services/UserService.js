/**
 * Created by davinazz on 15/02/2017.
 */

appchat.factory('UserService', function($http) {

    var API = 'http://preprod.prokonect.fr/api';

    var service = {

        createUser: function(user) {
            var url = API + "/users/create/" +user.email+ "/" +user.nickname+ "/" +user.password+ "/" +user.firstname+ "/" +user.lastname;

            $http.get(url)
                .then(function(status) {

                });


        }
    };

    return service;

});
