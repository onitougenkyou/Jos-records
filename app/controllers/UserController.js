/**
 * Created by davinazz on 16/02/2017.
 */

appchat.controller('UserController', function($scope, $routeParams, UserService) {

        function signup() {
            var user = {
                mail: $scope.mail,
                password: $scope.password,
                nickname: $scope.nickname,
                lastname: $scope.lastname,
                firstname: $scope.firstname
            };
            UserService.createUser(user);
        }
    }
);
