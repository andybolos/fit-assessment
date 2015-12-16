app.service('mainService', function($state, $q, $http, $window) {

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

    this.makePayment = function (user) {
        //TODO (jcd 12/16) view should check email before submitting
        var dfd = $q.defer();
        
        $http.post('/api/submitPayment', {
            email: user.email,
            token: user.token,
            purchased: user.cart
        })
            .then(function (response) {
                if (response.data.success) {
                    //TODO (jcd 12/16) create paymentSuccess state ('please check email', return to home button)
                    $state.go('paymentSuccess');
                } else {
                    dfd.reject();
                }
            })
            .catch(function (err) {
                dfd.reject(err);                
            })
        
        return dfd.promise;
    }

    this.getMyAssessments = function(userId) {
        var dfd = $q.defer();
        
        $http.get('/api/myAssessments/' + userId)
            .then(function (response) {
                dfd.resolve(response.data);
            })
            .catch(function (err) {
                dfd.reject(err);
            })
        
        return dfd.promise;

        // return myAssessments;
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
    
    this.getFreeResults = function (id) {
        var dfd = $q.defer();
        
        $http.get('/api/getFreeResults/' + id)
            .then(function (response) {
                dfd.resolve(response.data);
            })
            .catch(function (err) {
                dfd.reject(err);
            })
        
        return dfd.promise;
    }
    
    this.checkEmail = function (email) {
        var dfd = $q.defer();
        
        $http.post('/api/checkEmail', {
               email: email
        })
            .then(function (response) {
                if (response.data.success) {
                    dfd.resolve();
                } else {
                    dfd.reject();
                }
           })
        
        return dfd.promise;
    }
    
    this.getUser = function (id) {
        var dfd = $q.defer();
        
        $http.get('/api/getUser/' + id)
            .then(function (response) {
                $window.sessionStorage.user = JSON.stringify(response.data);
                dfd.resolve(response.data);
            })
            .catch(function (err) {
                dfd.reject(err);
            })
        
        return dfd.promise;
    }
    
});
