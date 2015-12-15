app.controller('listCtrl', function($scope, mainService, assessments, $state) {

    var bag = mainService.getMyAssessments();

    $scope.list = bag;

    $scope.getAssessment = function(obj) {
        mainService.setAssessment(obj);
        $state.go('assessment')
    }

});
