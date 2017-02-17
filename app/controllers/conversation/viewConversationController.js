appchat.controller('viewControllerController', function($scope, conversationService) {
	conversationService.GetById(2).then(function(response) {
		$scope.annonces = response.data;

	});
});
