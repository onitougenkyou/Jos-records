app.factory('CreatConversationService', function($http, $q, $id, $user_id_recipient, $user_id_sender){
  var API : 'http://preprod.prokonect.fr';

  var conversation = {
    response : false,
    GetAll: function (id) {
      var deferred = $q.defer();
      var url : API + '/Conversation/';

      $http.get(url).then(function(data, status){
        conversation.response = data;
        deferred.resolve(service.response);
      });

      return defered.promise;
    },
    GetById: function(id, user_id_recipient, user_id_sender ) {
      var deferred = $q.defer();
      var url : API + '/Conversation/view' + id + user_id_recipient + user_id_sender;

      $http.get(url)
      .then(function(data, status) {
        service.response = data;
        deferred.resolve(service.response);
      });
      return deferred.promise;
    }
  }
  return conversation;
});
