'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope, API) {
  	API.list()
  		.success(function(qcm){
  			$scope.qcm=qcm;
  		});
  });
