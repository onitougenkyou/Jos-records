appchat.controller('viewController', function($scope, conversationService) {

	var user = localStorage.getItem("user");
	var userJson = JSON.parse(user);

		conversationService.GetById(2).then(function(response) {
			$scope.conversations = response.data;
			console.log(response.data);
		});
	});
