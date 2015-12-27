'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('CreateCtrl', function ($scope, API) {
  	$scope.questions=[];

  	$scope.status=[
  		{
  			name:"Preparing"
  		},
  		{
  			name:"Done"
  		},
  		{
  			name:"Finished"
  		}
  	];

   	$scope.create=function(){
   		$scope.questions.push($scope.question);
   		$scope.question={};
   		toastr.success('Question added !', 'QCM Game');
   	}

   	$scope.save=function(){
   		var qcm={
   			name:$scope.qcm.name,
   			status:$scope.qcm.status,
   			questions:$scope.questions
   		}

   		console.log(qcm);

   		API.create(qcm)
   			.success(function(){
   				toastr.success('QCM Created !', 'QCM Game');
   			});
   	}
  });
