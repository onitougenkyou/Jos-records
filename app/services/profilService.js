appchat.factory('profilService', function($http) {
  var API = 'http://preprod.prokonect.fr/api';

    var service = {

        profil: function(user) {
            var url = API + "users/view" +id;

            $http.get(url)
                .then(function(status) {

                });
        }
    };

    return service;

});
