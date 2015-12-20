/* global angular */
var app = angular.module('interafit');
app.service('authService', function ($q, $http, $state) {
    
    this.login = function (user) {
        var dfd = $q.defer();
        
        $http.post('/auth/login', user)
            .then(function (response) {
                if (response.data.success) {
                    $state.go('dashboard');
                }
            })
            .catch(function (err) {
                $state.go('login');
            })
        
        return dfd.promise;
    }
    
    this.logout = function () {
        $http.get('/auth/logout')
            .then(function () {
                $state.go('home');  
            })
            .catch(function () {
                $state.go('home');
            })
    }
    
})