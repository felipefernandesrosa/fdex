'use strict';

/**
 * @ngdoc overview
 * @name fdexAppApp
 * @description
 * # fdexAppApp
 *
 * Main module of the application.
 */
angular
  .module('fdexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/detail/:id', {
        templateUrl: 'views/realtydetail.html',
        controller: 'RealtydetailCtrl',
        controllerAs: 'Realtydetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
