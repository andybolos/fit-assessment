app.controller('homeCtrl', function($scope, mainService, $state) {


    var rcq = {
        title: 'Readiness to Change',
        id: 'rcq'
    };

    $scope.free = function() {
        mainService.setAssessment(rcq);
        $state.go('assessment');
    }

});
