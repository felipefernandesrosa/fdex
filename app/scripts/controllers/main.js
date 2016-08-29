'use strict';

/**
 * @ngdoc function
 * @name fdexAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fdexAppApp
 */
angular.module('fdexApp')
    .controller('MainCtrl', function ($scope, realtyApiFactory) {
    
    $scope.results = [];
    
    var loadRealty = function(){
      realtyApiFactory.getRealties().then(function successCallback(response) {
        $scope.results = response.data;
        
      }, function errorCallback(response) {
        
      });
    };
    
    $scope.addContact = function(realty){
      realtyApiFactory.sendRealty(realty).then(function successCallback(response){
        
        delete $scope.realty;
				$scope.realtyForm.$setPristine();
        $('#myModal').modal('hide');
        
        loadRealty();
        
      }, function errorCallback(){
      
      });
    };
    
    loadRealty();
});
