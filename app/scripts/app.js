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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
