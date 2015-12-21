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
        var dfd = $q.defer();
        
        $http.post('/api/submitPayment', {
            email: user.email,
            token: user.token,
            purchased: user.cart
        })
            .then(function (response) {
                if (response.data.success) {
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
    
    this.getFreeEmail = function(id) {
        var dfd = $q.defer();
        
        $http.get('/api/getFreeEmail/' + id)
            .then(function(response) {
                dfd.resolve(response.data.email);
            })
            .catch(function(err) {
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
    
    this.getFullResults = function (assessmentId) {
        //TODO (jcd 12/17) this will get everything needed to show full results/modules/etc.
        var dfd = $q.defer();
        
        $http.get('/api/getFullResults/' + assessmentId)
            .then(function(response) {
                dfd.resolve(response.data);
            })
            .catch(function(err) {
                dfd.reject(err);
            })
        
        return dfd.promise;
    }
    
    this.getFullRCQResults = function(id) {
        var dfd = $q.defer();
        
        $http.get('/api/getFullRCQResults/' + id)
            .then(function(response) {
                var score = response.data;
                dfd.resolve(score);
            })
            .catch(function(err) {
                dfd.reject(err);
            })
        
        return dfd.promise;
    }
    
    this.handleStripeRCQPayment = function(tokenObj, amount) {
        var dfd = $q.defer();
        console.log(tokenObj)
        
        $http.post('/api/makeRCQPayment', {
            tokenObj: tokenObj,
            amount: amount
            })
            .then(function() {
                dfd.resolve();
            })
            .catch(function() {
                dfd.reject();
            })
        
        return dfd.promise;
    }
    
    this.handleStripePayment = function(tokenObj, amount, purchased) {
        var dfd = $q.defer();
        console.log(tokenObj)
        
        $http.post('/api/submitPayment', {
            tokenObj: tokenObj,
            amount: amount,
            purchased: purchased
            })
            .then(function() {
                dfd.resolve();
            })
            .catch(function() {
                dfd.reject();
            })
        
        return dfd.promise;
    }
    
});
