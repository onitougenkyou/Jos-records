appchat.controller('conversationController', function($scope, conversationService,$routeParams)
{
  var id = $routeParams.id;
  var lastID = null;
  var done = false;
  console.log(id);

  conversationService.getconversation(id).then(function(response)
  {
    $scope.messages= messages = response.data.messages;
    for (var i = 0; i < messages.length; i++)
    {
      lastID = messages[i].id;
    }
    console.log(response.data.messages);
    console.log("id "+lastID);
    done = true;


  });
  while(done == true)
  {

    console.log("last "+lastID);
    setInterval(function(){
    conversationService.RefreshById(lastID).then(function(response)
    {
      $scope.messages= response.data.messages;
    });
  }, 10000);

  }
});
