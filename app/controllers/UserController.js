/**
 * Created by davinazz on 16/02/2017.
 */

appchat.controller('UserController', function($scope, $routeParams, UserService) {

        $scope.signup = function () {
            var user = {
                mail: $scope.mail,
                password: $scope.password,
                nickname: $scope.nickname,
                lastname: $scope.lastname,
                firstname: $scope.firstname
            };
            console.log(user);
            UserService.createUser(user);
        }
    }
);
