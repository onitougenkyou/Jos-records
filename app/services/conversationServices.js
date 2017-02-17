appchat.factory('conversationService', function($http, $q) {
  var API = 'http://preprod.prokonect.fr/api';

  var service = {
    create: function(user) {
      var deferred = $q.defer();
      var url = API + "/conversations/create/" +user.recipient.id+ "/" +user.sender.id;

      // console.log(user);
      // console.log(user.recipient.id);
      $http.get(url)
      .then(function(data) {
          service.response = data;
          deferred.resolve(service.response);
      });
        return deferred.promise;
    }
  };
  return service;
});
