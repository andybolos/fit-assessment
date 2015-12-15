app.controller('dashboardCtrl', function($scope, mainService) {

    $scope.test = "Test";

    $scope.clients = mainService.clients();

})
