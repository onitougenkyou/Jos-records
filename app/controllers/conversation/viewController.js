appchat.controller('viewController', function($scope, conversationService) {
	conversationService.GetById(2).then(function(response) {
		$scope.annonces = response.data;

	});
});
