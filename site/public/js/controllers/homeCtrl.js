app.controller('homeCtrl', function($scope, mainService, $state) {


    $scope.free = function() {
        mainService.setAssessment()
            .then(function() {
                $state.go('assessment');
            });
    }

});
