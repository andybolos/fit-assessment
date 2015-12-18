app.controller('checkoutCtrl', function ($rootScope, $scope, mainService, $state) {
    
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
    
    //Stripe requires amount in cents
    $scope.totalForStripe = function() {
        return $scope.total()*100;
    }
    
    var handler = StripeCheckout.configure({
        key: 'pk_test_uCz9Xv73uwGiR1olbpvE0uWA',
        image: '/assets/lifeFitLogo.png',
        locale: 'auto',
        token: function(token) {
        // Use the token to create the charge with a server-side script.
        // You can access the token ID with `token.id`
        console.log(token);
        var total = $scope.totalForStripe();
        mainService.handleStripePayment(token, total, reviewCart)
            .then(function() {
                $state.go('paymentSuccess');
            })
            .catch(function(err) {
                $state.go('paymentError');
            })
        }
    });

    $scope.pay = function (e) {
        e.preventDefault();
        var total = $scope.totalForStripe();
     handler.open({
      name: 'FitLife',
      description: 'FitLife Assessment(s)',
      amount: total,
      email: $scope.email
    });
    };

    $scope.checkEmail = function () {
        mainService.checkEmail($scope.email)
            .then(function () {
                $scope.validEmail = true;
                $scope.emailMessage = 'Email is available!';
            })
            .catch(function () {
                $scope.validEmail = false;
                $scope.emailMessage = 'Email in use, please try a different email.'
            })
    }
    
    $rootScope.$on('$stateChangeStart', function() {
        handler.close();
    })

});
