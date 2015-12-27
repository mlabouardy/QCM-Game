'use strict';

/**
 * @ngdoc service
 * @name appApp.API
 * @description
 * # API
 * Service in the appApp.
 */
angular.module('appApp')
  .service('API', function ($http) {
  	var BASE_URL='http://localhost:3000';
    return{
    	create:function(data){
    		return $http.post(BASE_URL+'/qcm',data);
    	},
    	list:function(){
    		return $http.get(BASE_URL+'/qcm');
    	},
    	findById:function(id){
    		return $http.get(BASE_URL+'/qcm/'+id);
    	}
    }
  });
