app.controller('CreatConversationController', function($scope, CreatConversationService) {
	CreatConversationService.GetAll(1).then(function(response) {
		$scope.CreatConversation = response.data;
		// console.log(response);
	});
});
