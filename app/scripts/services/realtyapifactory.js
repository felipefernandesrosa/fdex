'use strict';

/**
 * @ngdoc service
 * @name fdexAppApp.realtyapifactory
 * @description
 * # realtyapifactory
 * Service in the fdexAppApp.
 */
angular.module('fdexApp')
	.service('realtyApiFactory', function ($http) {
		//$http.defaults.headers.common['authentication'] = 'egeniusfounders2016';
		return{
			getRealty: function(){
				return $http.get("http://localhost:5000/api/realty");
			},
			sendRealty: function(data){
        
				return $http.post("http://localhost:5000/api/realty",data);	
			}
		};  
	    
	});
