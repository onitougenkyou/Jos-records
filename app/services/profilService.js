appchat.factory('profilService', function($http) {
  var API = 'http://preprod.prokonect.fr/api';

    var service = {

        profil: function(user) {
            var url = API + "/conversations/create/" +user.id.recipient+ "/" +user.id.sender;

            $http.get(url)
                .then(function(status) {

                });


        }
    };

    return service;

});
