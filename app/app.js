'use strict';
//TCRO login instead of the form
angular
   .module('myApp', ['ui.router', 'ui.bootstrap'])
   .config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function($urlRouterProvider, $stateProvider, $httpProvider){
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.common["Content-Type"] = 'application/x-www-form-urlencoded';

      $urlRouterProvider.otherwise('/');

      $stateProvider
         .state('landing', {
            url: '/',
            templateUrl: 'app/landing/main.html',
            controller: 'dropdownCtrl'
         });
   }])
   .controller('dropdownCtrl', function ($scope, $log, $location) {

     $scope.status = {
       isopen: false
     };

     $scope.toggleDropdown = function($event) {
       $event.preventDefault();
       $event.stopPropagation();
     };

     $scope.client = {};
     $scope.login = function(path) {

      window.location.replace('http://www.aditienterprisegroup.net/' + path + '/secure/login');

        //var data = $scope[path];

        // var data = {
        //   username: 'dinobaca',
        //   password:'dinobaca'
        // };

        // if(data.username === undefined || data.password === undefined) {
        //   console.log('should not post');
        //   return;
        // }

        // var urlHash = {
        //   client: 'http://aditienterprisegroup.net/client/secure/login/credential',
        //   broker: '',
        //   affiliate: ''
        // };


     //    $http({
     //        method: 'POST',
     //        url: urlHash.client,
     //        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
     //        transformRequest: function(obj) {
     //            var str = [];
     //            for(var p in obj)
     //            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
     //            return str.join("&");
     //        },
     //        data: data
     //    }).then(function onSuccess(res) {
     //      console.log('success', res);
     //    }, function onFail(err) {
     //      console.log('failed', err);
     //    });
     };

   });