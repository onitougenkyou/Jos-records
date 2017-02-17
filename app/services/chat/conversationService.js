appchat.factory('conversationService', function($http, $q) {

    var API = 'http://preprod.prokonect.fr';

    var service = {
        response : false,
        getconversation: function(id) {
            var deferred = $q.defer();
            var url = API + "/api/conversations/view/"+id ;

            $http.get(url)
            .then(function(data, status) {
                service.response = data;
                deferred.resolve(service.response);
            });

            return deferred.promise;
        }
        RefreshById: function(id) {
            var deferred = $q.defer();
            var url = API + "/api/conversations/messages/all/"+id ;

            $http.get(url)
            .then(function(data, status) {
                service.response = data;
                deferred.resolve(service.response);
            });

            return deferred.promise;
        }
    }

    return service;
});
