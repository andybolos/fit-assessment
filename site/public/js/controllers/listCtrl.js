app.controller('listCtrl', function($scope, mainService, assessments, $state, user, myAssessments) {
    
    $scope.user = user;
    console.log($scope.user);
    
    
    // $scope.list = myAssessments;
    // console.log($scope.list)
    
    mainService.checkCompleted(myAssessments, user)
        .then(function (response) {
            $scope.list = response;
            console.log($scope.list);
        })
    

    $scope.getAssessment = function(obj) {
        mainService.setAssessment(obj);
        $state.go('assessment')
    }
    
    $scope.viewResults = function(assessment) {
        if (assessment.quiz_id === 'rcq') {
            $state.go('rcqResults', {assessment_id: assessment.completed});
        } else {
            $state.go('fullResults', {assessment_id: assessment.completed})
        }
    }

});
