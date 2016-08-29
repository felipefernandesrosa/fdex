'use strict';

/**
 * @ngdoc function
 * @name fdexApp.controller:RealtydetailCtrl
 * @description
 * # RealtydetailCtrl
 * Controller of the fdexApp
 */
angular.module('fdexApp')
  .controller('RealtydetailCtrl', function ($scope, $routeParams, realtyApiFactory) {
    realtyApiFactory.getRealty($routeParams.id).then(function successCallback(response) {
      
      $scope.result = response.data;
      $scope.description = response.data.description;
      
    }, function errorCallback(response) {
      
    });
    
  });
