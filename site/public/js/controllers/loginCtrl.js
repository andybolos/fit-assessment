app.controller('loginCtrl', function($scope, $state, authService) {

    $scope.login = function () {
        authService.login($scope.user);
        // $state.go('dashboard')
    }
})
