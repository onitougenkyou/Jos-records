appchat.controller('CreateConversationController', function($scope,$routeParams, conversationService) {

	$scope.newConversation = function(id){
		var user = {
			recipient :{
				id:id
			},
			sender : {
				id : 1
			}
		};

		conversationService.create(user).then(function(response) {
			console.log(response.data[0].conversation.id);
		});
	}
});
