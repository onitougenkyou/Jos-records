appchat.controller('CreateConversationController', function($scope,$routeParams, CreateConversationService) {

	$scope.newConversation = function(id){
		var user = {
			recipient :{
				id:id
			},
			sender : {
				id : 1
			}
		};

		CreateConversationService.createConversation(user).then(function(response) {


			var createConversation = {
				id_sender: $scope.user_id_sender,
				id_recipient: $scope.$user_id_recipient
			}
		})
	}
});
