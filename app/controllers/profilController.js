appchat.controller('profilController', function($scope,$routeParams, CreateConversationService, topicService) {

	$scope.profil = function(id){
		var user = {
				id:id
		};

		CreateConversationService.createConversation(user).then(function(response) {


			var profil = {
				id: $scope.idl 
			}
		})
	}


	var user = localStorage.getItem("user");
	$scope.user = JSON.parse(user);

	topicService.GetAll(user.id, 10).then(function(response) {

		console.log(response);
	});


/* text area publictation */

	$scope.envoyer = function() {
		var newPost = $scope.newPost;
		console.log(newPost);
	}



});
