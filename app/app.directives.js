/**
 * Created by davinazz on 15/02/2017.
 */
app.factory('AnnonceService', function($http, $q) {

    var API = 'http://beta.prokonect.fr/api';

    var service = {
        response : false,
        GetAll: function(limit) {
            var deferred = $q.defer();
            var url = API + "/annonces/" + limit;

            $http.get(url)
                .then(function(data, status) {
                    service.response = data;
                    deferred.resolve(service.response);
                });
            ;
            return deferred.promise;
        },
        GetById: function(id) {
            var deferred = $q.defer();
            var url = API + "/annonces/view/" + id;

            $http.get(url)
                .then(function (data, status){
                    service.response = data;
                    deferred.resolve(service.response);
                });

            return deferred.promise;



        }

    }
    return service;
});
