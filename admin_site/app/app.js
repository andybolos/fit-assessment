var app = angular.module('lifeFit', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'loginCtrl'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
});
