appchat.factory('profilService', function($http) {
  var API = 'http://preprod.prokonect.fr/api';

    var service = {

        profil: function(user) {
            var url = API + "users/view" +id;

            $http.get(url)
                .then(function(status) {

                });
        },

        newPost: function(newPost) {
            var url = API + "/api/topics/create/" + newPost.userid + "/" +newPost.contenu;

            $http.get(url)
                .then(function(status) {

                });
        }


    };

    return service;

});



