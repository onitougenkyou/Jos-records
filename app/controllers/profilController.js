appchat.controller('profilController', function($scope,$routeParams, CreateConversationService) {

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
});
