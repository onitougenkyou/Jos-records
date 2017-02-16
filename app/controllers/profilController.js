appchat.controller('profilController', function($scope,$routeParams, CreateConversationService, topicService) {

	$scope.profil = function(id){
		var user = {
				id:id
		};

		CreateConversationService.createConversation(user).then(function(response) {


			var profil = {
				id: $scope.id
			}
		})
	}


	var user = localStorage.getItem("user");
	$scope.user = user = JSON.parse(user);

	topicService.GetAll(user.id, 10).then(function(response) {

		console.log(response);
	});

	



});

