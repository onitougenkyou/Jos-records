/**
 * Created by davinazz on 15/02/2017.
 */

app.factory('AnnonceService', function($http, $q) {

    var API = 'http://preprod.prokonect.fr/api';

    var service = {
        response : false,
        GetAll: function(limit) {
            var deferred = $q.defer();
            var url = API + "/users/create/" + limit;

            $http.post(url)
                .then(function(data, status) {
                    service.response = data;
                    deferred.resolve(service.response);
                });

            return deferred.promise;
        }
    }

    return service;

});
