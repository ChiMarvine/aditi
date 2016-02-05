'use strict';

angular
   .module('myApp', ['ui.router', 'ui.bootstrap'])
   .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
         .state('landing', {
            url: '/',
            templateUrl: 'app/landing/main.html',
            controller: 'dropdownCtrl'
         });
   }])
   .controller('dropdownCtrl', function ($scope, $log) {

     $scope.status = {
       isopen: false
     };

     $scope.toggleDropdown = function($event) {
       $event.preventDefault();
       $event.stopPropagation();
     };

   });