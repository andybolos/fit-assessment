app.service('mainService', function($state) {

    var bag = {};
    var myAssessments = {};
    var activeAssessment = {};

    this.checkout = function(assessments) {
        $state.go('checkout');
        bag = assessments;
    };

    this.cart = function() {
        return bag;
    }

    this.makePayment = function(cartAssessment) {
        myAssessments = cartAssessment
        $state.go('landing');
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
});
