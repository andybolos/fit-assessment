var app = angular.module('interafit', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '^/home',
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
        })
        .state('menu', {
            url: '^/menu',
            templateUrl: '../views/menu.html',
            controller: 'menuCtrl'
        })
        .state('checkout', {
            url: '^/checkout',
            templateUrl: '../views/checkout.html',
            controller: 'checkoutCtrl'
        })
        .state('assessment', {
            url: '^/assessment',
            templateUrl: '../views/assessment.html',
            controller: 'questionCtrl',
            params: {
                promo: false,
                promoCode: '',
                name: ''
            }
        })
        .state('list', {
            url: '^/list/:userId',
            templateUrl: '../views/list.html',
            controller: 'listCtrl',
            resolve: {
                user: function (mainService, $stateParams) {
                    return mainService.getUser($stateParams.userId);
                },
                myAssessments: function (mainService, $stateParams) {
                    return mainService.getMyAssessments($stateParams.userId);
                }
            }
        })
        .state('login', {
            url: '^/login',
            templateUrl: '../views/login.html',
            controller: 'loginCtrl'
        })
        .state('dashboard', {
            url: '^/dashboard',
            templateUrl: '../views/dashboard.html',
            controller: 'dashboardCtrl',
            resolve: {
                promoCodes: function (adminService) {
                    return adminService.getPromoCodes();
                }
            }
        })
        .state('resultsPreview', {
            url: '^/results/preview/:id',
            templateUrl: '../views/freeResults.html',
            controller: 'previewCtrl',
            resolve: {
                freeResults: function (mainService, $stateParams) {
                    return mainService.getFreeResults($stateParams.id);
                },
                getEmail: function(mainService, $stateParams) {
                    return mainService.getFreeEmail($stateParams.id)
                }
            }
        })
        .state('paymentSuccess', {
            url: '^/thanks',
            templateUrl: '../views/paymentSuccess.html'
        })
        .state('paymentError', {
            url: '^/sorry',
            templateUrl: '../views/paymentError.html'
        })
        .state('fullResults', {
            url: '^/results/:assessment_id',
            templateUrl: '../views/fullResults.html',
            controller: 'resultsCtrl',
            resolve: {
                getFullResults: function (mainService, $stateParams) {
                    return mainService.getFullResults($stateParams.assessment_id);
                }
            }
        })
        .state('rcqResults', {
            url: '^/results/rcq/:assessment_id',
            templateUrl: '../views/rcqResults.html',
            controller: 'rcqResultsCtrl',
            resolve: {
                getRCQResults: function(mainService, $stateParams) {
                    return mainService.getFullRCQResults($stateParams.assessment_id);
                }
            }
        })
        .state('promo', {
            url: '^/promo',
            templateUrl: '../views/promo.html',
            controller: 'promoCtrl',
            resolve: {
                assessments: function (mainService) {
                    return mainService.getAssessmentList();
                }
            }
        })

});

app.run(function ($rootScope, $state, $window) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.log(error);
    })
    
    $rootScope.$on('$stateChangeStart', function (event, toState) {
        if (toState.name === 'home' && $window.sessionStorage.user) {
            console.log('bye user')
            delete $window.sessionStorage.user;
        }
    })
})