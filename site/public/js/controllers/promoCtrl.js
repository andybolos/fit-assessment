app.controller('promoCtrl', function ($scope, mainService, assessments, $state) {
    
    $scope.validPromo = false;
    
    $scope.assessments = assessments;

    $scope.submitPromoCode = function (code) {
        mainService.submitPromoCode(code)
            .then(function (response) {
                if (response.success) {
                    $scope.validPromo = code;
                } else {
                    $scope.validPromo = false;
                    $scope.errorMsg = response.message;
                }
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    
     $scope.getAssessment = function(obj, name, promoCode) {
         mainService.setAssessment(obj);
        $state.go('assessment', {promo: true, promoCode: promoCode, name: name})
    }
})