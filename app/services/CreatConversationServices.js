app.factory('CreatConversationService', function($http){
  var API : 'http://preprod.prokonect.fr/api';

    var service = {

        createConversation: function(CreatConversation) {
            var url = API + "/conversations/create/" +user.id.recipient+ "/" +user.id.sender;

            $http.get(url)
                .then(function(status) {

                });


        }
    };

    return service;

});
