app.controller('checkoutCtrl', function($scope, mainService) {

    var review = function() {
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

    $scope.total = function() {
        var price1 = 0;
        for (var i = 0; i < reviewCart.length; i++) {
            price1 = price1 + reviewCart[i].price;
        }
        return price1;
    };

    $scope.makePayment = function() {
        mainService.makePayment(reviewCart);
    };

});
