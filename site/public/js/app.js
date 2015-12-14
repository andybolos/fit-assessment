var app = angular.module('interafit', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html',
        })
        .state('menu', {
            url: '/menu',
            templateUrl: '../views/menu.html',
            controller: 'menuCtrl'
        })
        .state('checkout', {
            url: '/checkout',
            templateUrl: '../views/checkout.html',
            controller: 'checkoutCtrl'
        })
        .state('assessment', {
            url: '/assessment',
            templateUrl: '../views/assesment.html',
            controller: 'questionCtrl'
        })
        .state('landing', {
            url: '/landing',
            templateUrl: '../views/landing.html',
            controller: 'landingCtrl'
        });
});
