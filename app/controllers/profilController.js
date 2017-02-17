appchat.controller('profilController', function($scope,$routeParams, topicService) {

	$scope.profil = function(id){
		var user = {
				id:id
		};

}

	var user = localStorage.getItem("user");
	$scope.user = JSON.parse(user);

	topicService.GetAll(user.id, 10).then(function(response) {

		console.log(response);
	});


<<<<<<< HEAD
/* text area publictation */

	$scope.envoyer = function() {
		var newPost = $scope.newPost;
		console.log(newPost);
	}
=======
>>>>>>> badc4cb7ece513c2f58e9b0ab4414339496d3314



});
