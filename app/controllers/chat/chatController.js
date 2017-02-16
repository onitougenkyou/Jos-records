app.controller('chatController', function($scope, chatService,$routeParams) {
  var id = $routeParams.id;
  console.log(id);
  setInterval(function(){
    AnnonceService.RefreshById(id).then(function(response) {
      $scope.annonce = response.data;
      console.log(response.data); 
    }

  }, 1000);
);
});
