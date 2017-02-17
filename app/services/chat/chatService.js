// appchat.factory('chatService', function($http, $q) {
//
//     var API = 'http://preprod.prokonect.fr';
//
//     var service = {
//         response : false,
//         RefreshById: function(id) {
//             var deferred = $q.defer();
//             var url = API + "/api/conversations/messages/all/"+id ;
//
//             $http.get(url)
//             .then(function(data, status) {
//                 service.response = data;
//                 deferred.resolve(service.response);
//             });
//
//             return deferred.promise;
//         }
//
//     }
//
//     return service;
// });
