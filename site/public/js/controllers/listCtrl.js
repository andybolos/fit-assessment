app.controller('listCtrl', function($scope, mainService, assessments, $state, user, myAssessments) {
    
    $scope.user = user;
    console.log($scope.user);
    
    $scope.list = myAssessments;
    console.log($scope.list)

    $scope.getAssessment = function(obj) {
        mainService.setAssessment(obj);
        $state.go('assessment')
    }

});
