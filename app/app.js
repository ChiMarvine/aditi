'use strict';

angular
   .module('myApp', ['ui.router', 'ui.bootstrap'])
   .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
         .state('landing', {
            url: '/',
            templateUrl: 'app/landing/landing.html',
            controller: 'landingCtrl'
         });
   }]);