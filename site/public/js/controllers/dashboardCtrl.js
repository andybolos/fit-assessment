app.controller('dashboardCtrl', function($scope, adminService) {

    $scope.test = "Test";

    $scope.clients = adminService.clients();

})
