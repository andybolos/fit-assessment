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
        var dfd = $q.defer();
        if (obj) {
        activeAssessment = obj;
        dfd.resolve();
        } else {
            $http.get('/api/getAssessmentByStr/rcq')
                .then(function(response) {
                    activeAssessment = response.data;
                    dfd.resolve();
                })
                .catch(function(err) {
                    dfd.reject(err);
                })
        }
        return dfd.promise;
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
    
    this.paidSubmit = function(user) {
        console.log(user);
        var dfd = $q.defer();
        $http.post('/api/submitAssessment', user)
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
    
    this.checkCompleted = function (list, user) {
        var dfd = $q.defer();
        var toCheck = [];
        toCheck = list.map(function (item) {
            return item._id;
        })
        var completed = [];
        completed = user.assessments.map(function (item) {
            return item.assessment_id
        })
        for (var i = 0; i < toCheck.length; i++) {
            var isCompletedIndex = completed.indexOf(toCheck[i]);
            if (isCompletedIndex !== -1) {
                list[i].completed = user.assessments[isCompletedIndex]._id;
            }
        }
        dfd.resolve(list);
        return dfd.promise;
    }
    
    this.getFullResults = function (assessment_id) {
        //TODO (jcd 12/17) this will get everything needed to show full results/modules/etc.
        return assessment_id;
    }
    
    this.handleStripeRCQPayment = function(tokenObj) {
        var dfd = $q.defer();
        console.log(tokenObj)
        
        //TODO (jcd 12/17) hit endpoint for payment, check for user (make sure 'rcq' isn't in their paid array), make stripe charge, then add 'rcq' to the user's paid array and finally email them a link to their user page.
        dfd.resolve();
        return dfd.promise;
    }
    
});
