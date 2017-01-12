'use strict';


wvMatApp.controller('CoachController',
			function($scope) {
			$scope.wrestlers = []
			
			


	$scope.saveWrestler = function() {
	
	//prints each wrestler to the console	
	console.log($scope.wrestlers.firstName + "\n" + $scope.wrestlers.lastName + "\n" + $scope.wrestlers.weightClass + "\n" + $scope.wrestlers.grade);
		 
		//adds each wrestler object to the array of wrestlers
		 $scope.wrestlers.push({ 'firstName':$scope.wrestlers.firstName, 'lastName': $scope.wrestlers.lastName, 'weightClass':$scope.wrestlers.weightClass, 'grade':$scope.wrestlers.grade });
		
		for(var i = 0; i < $scope.wrestlers.length; i++) {
			console.log($scope.wrestlers[i]);
		}
		
		$scope.wrestlers.firstName='';
					$scope.wrestlers.lastName='';
					$scope.wrestlers.weightClass='';
					$scope.wrestlers.grade='';
	
	}
	



});