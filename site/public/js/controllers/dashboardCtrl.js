app.controller('dashboardCtrl', function($scope, promoCodes, adminService, authService) {

    $scope.codes = promoCodes;

    $scope.addPromoCode = function () {
        $scope.addingCode = true;
    }
    
    $scope.editPromoCode = function(editCode) {
        $scope.editingCode = editCode;
    }
    
    $scope.cancel = function() {
        $scope.addingCode = false;
        $scope.editingCode = false;
        $scope.deletingCode = false;
        $scope.errorMsg = '';
        $scope.errorEditMsg = '';
    }
    
    $scope.submitPromoCode = function (code) {
        adminService.submitPromoCode(code)
            .then(function (codes) {
                console.log(codes);
                $scope.codes = codes;
                $scope.cancel();
            })
            .catch(function (err) {
                console.log(err);
                if (err.data.code === 11000) {
                    $scope.errorMsg = 'Promo code in use. Please enter a unique promo code';
                } else {
                    $scope.errorMsg = 'Error submitting code. Please try again.';
                    
                }
            })
    }
    
    $scope.updatePromoCode = function(code) {
        adminService.updatePromoCode(code)
            .then(function(codes) {
                $scope.codes = codes;
                $scope.cancel();
            })
            .catch(function(err) {
                if (err.data.code === 11000) {
                    $scope.errorEditMsg = 'Promo code in use. Please enter a unique promo code';
                } else {
                    $scope.errorEditMsg = 'Error updating. Please try again.';
                }
            })
    }
    
    $scope.deletePrompt = function(code) {
        $scope.deletingCode = code;
    }
    
    $scope.deletePromoCode = function(id) {
        adminService.deletePromoCode(id)
            .then(function(codes) {
                $scope.codes = codes;
                $scope.cancel();
            })
    }

    $scope.logout = function () {
        authService.logout();
    }
})
