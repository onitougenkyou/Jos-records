appchat.controller('conversationController', function($scope, conversationService,$routeParams)
{
  var id = $routeParams.id;
  var lastID = null;
  var done = false;
  var user = localStorage.getItem('user');
  user= JSON.parse(user);
  $scope.id = id ;
  $scope.user = user;
  console.log(id);
  console.log("userid"+ user.id);
  //var arr = new Array();

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

  console.log("last "+lastID);
  setInterval(function(){
    if(done == true)
    {

      conversationService.getconversation(id).then(function(response)
      {
        $scope.messages= response.data.messages;
      });
    }
  }, 1000);


  $scope.f = function(id,user)
  {

    console.log("scope "+id);
    console.log("scope user id "+user.id);
    conversationService.SendMessage(id,user.id,$scope.dd).then(function(response){
      console.log(response);
      //$scope.messages(response.data.messages);
      // conversationService.getconversation(id).then(function(response)
      // {
      //   $scope.messages= messages = response.data.messages;
      //   for (var i = 0; i < messages.length; i++)
      //   {
      //     lastID = messages[i].id;
      //   }
      //   console.log(response.data.messages);
      //   console.log("id "+lastID);
      //   done = true;
      //
      //
      // });
    });

  }

});
