appchat.controller('profilController', function(
	$scope,$routeParams,topicService,profilService) {

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



/* text area publictation */
	

	$scope.envoyer = function() {

		var user = localStorage.getItem("user");
		
		var userjson = JSON.parse(user);

		var newPost = {
			userid: userjson.id,
			contenu: $scope.newPost
		};
 		
 		profilService.newPost(newPost);
	}




});
