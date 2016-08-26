'use strict';

/**
 * @ngdoc function
 * @name fdexAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fdexAppApp
 */
angular.module('fdexApp')
    .controller('MainCtrl', function ($scope, realtyApiFactory, $localStorage,$sessionStorage) {
    
		$scope.results = [];
		
		realtyApiFactory.getRealty().then(function successCallback(response) {
			
      console.log(response.data);
      $scope.results = response.data;
      
		}, function errorCallback(response) {
			
		});
        
		$scope.addContact = function(realty){
			realtyApiFactory.sendRealty(realty).then(function successCallback(response){
				
        console.log(realty);
				
			}, function errorCallback(){
			
			});
		};
    });
