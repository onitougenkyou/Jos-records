<<<<<<< HEAD:app/controllers/conversation/viewController.js
appchat.controller('viewController', function($scope, conversationService) {
=======
appchat.controller('viewControllerController', function($scope, conversationService) {
>>>>>>> 345618c1984622fa07fd8cbfcd3aea508d00e52b:app/controllers/conversation/viewConversationController.js
	conversationService.GetById(2).then(function(response) {
		$scope.annonces = response.data;

	});
});
