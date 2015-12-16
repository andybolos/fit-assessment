app.service('mainService', function($state, $q, $http) {

    var bag = {};
    var myAssessments = {};
    var activeAssessment = {};

    this.checkout = function(assessments) {
        $state.go('checkout');
        bag = assessments
    }

    this.cart = function() {
        return bag;
    }

    this.makePayment = function(cartAssessment) {
        myAssessments = cartAssessment
        $state.go('list');
    }

    this.getMyAssessments = function() {
        return myAssessments;
    }

    this.setAssessment = function(obj) {
        activeAssessment = obj;
    }

    this.activeAssessment = function() {
        return activeAssessment;
    }

    this.freeSubmit = function(user) {
        console.log(user);
        var dfd = $q.defer();
        $http.post('/api/submitFreeAssessment', user)
        .then(function(response) {
            dfd.resolve();
        })
        .catch(function(err) {
            dfd.reject(err);
        })
        return dfd.promise;
    }
});
