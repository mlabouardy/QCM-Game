'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:QcmCtrl
 * @description
 * # QcmCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('QcmCtrl', function ($routeParams, API, $scope) {
    API.findById($routeParams.id)
    	.success(function(data){
    		$scope.qcm=data;
    	})
  });
