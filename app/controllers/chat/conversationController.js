appchat.controller('conversationController', function($scope, conversationService,$routeParams)
{
  var id = $routeParams.id;
  var lastID = null;
  var done = false;
  var user = localStorage.getItem('user');
  user= JSON.parse(user);
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
  }, 1000);

  }

  $scope.f = function(id,user)
  {
     conversationService.SendMessage(id,user.id,$scope.dd).then(function(response){});};

});
