import {app} from '../app.js';
import '../mainCtrl';

 app.controller('adminCtrl', function($scope){
 	// $scope.admin = 'adminCtrl work';
 	$scope.setPage = 'Profile';
 	$scope.changeSetPage = (arg) => {
 		$scope.setPage = arg;
 			$.ajax({
			 	method: 'GET',
			 	dataType: 'json',
			 	url: './content.json',
			 }).done(request=>$scope.getText(request))
 	}
 	// $scope.contactAdm
 	// $scope.categAdm;
 	$scope.getText = (request) => {
 		$scope.textData = request.content;
 		console.log($scope.textData);
 		$scope.homeAdm = $scope.textData[0];
 		// console.log($scope.homeAdm)
 		$scope.aboutAdm = $scope.textData[1];
 		$scope.contactAdm = $scope.textData[2];
 		console.log($scope.contactAdm)
 		$scope.categAdm = $scope.textData[3];
 		$scope.$apply()
 	}
 })