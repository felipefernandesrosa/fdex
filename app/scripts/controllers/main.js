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
        
		$scope.$storage = $localStorage;
		
		$scope.result = [];
		$localStorage.$default({
			subject: []
		});
		
		realtyApiFactory.getRealty().then(function successCallback(response) {
			
      console.log(response);
      
//			$scope.result = response.data.result;
//      $scope.subject = $localStorage.subject;
      //console.log($scope.subject);
			
		}, function errorCallback(response) {
			
		});
        
		$scope.addContact = function(realty){
			realtyApiFactory.sendRealty(realty).then(function successCallback(response){
				
        console.log(realty);
				//$localStorage.subject.push(realty);
				
			}, function errorCallback(){
			
			});
		};
    });
