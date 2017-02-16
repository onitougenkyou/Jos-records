appchat.controller('conversationController', function($scope, conversationService,$routeParams) {
  var id = $routeParams.id;
  console.log(id);

    conversationService.getconversation(id).then(function(response) {
      $scope.conversation = response.data;
      console.log(response.data);
    });
});
