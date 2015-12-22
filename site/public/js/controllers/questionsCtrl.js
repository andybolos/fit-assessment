app.controller('questionCtrl', function($scope, mainService, $stateParams) {

    // go get the quiz based on the id
    
    $scope.promo = $stateParams.promo;
    $scope.name = $stateParams.name;
    $scope.promoCode = $stateParams.promoCode;
    
});
