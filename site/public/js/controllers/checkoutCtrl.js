app.controller('checkoutCtrl', function ($scope, mainService) {
    
    $scope.validEmail = false;

    var review = function () {
        var bag = mainService.cart();
        var myBag = [];

        for (var key in bag) {
            if (bag[key].selected) {
                myBag.push(bag[key]);
            }
        }
        return myBag;
    };
    var reviewCart = review();
    $scope.cart = reviewCart;

    $scope.total = function () {
        var price1 = 0;
        for (var i = 0; i < reviewCart.length; i++) {
            price1 = price1 + reviewCart[i].price;
        }
        return price1;
    };

    //TODO (jcd 12/16) needs user email and cart
    $scope.makePayment = function () {
        var user = {
            email: $scope.email,
            token: 'stripeToken',
            cart: reviewCart
        }
        mainService.makePayment(user);
    };

    $scope.checkEmail = function () {
        mainService.checkEmail($scope.email)
            .then(function () {
                $scope.validEmail = true;
                $scope.emailMessage = '';
            })
            .catch(function () {
                $scope.validEmail = false;
                $scope.emailMessage = 'Email in use, please try a different email.'
            })
    }

});
