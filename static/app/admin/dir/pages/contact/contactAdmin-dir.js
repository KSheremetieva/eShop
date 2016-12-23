import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../adminCtrl.js';
import contactAdmin_template from './template/contactAdmin.html';

app.directive('contactadminDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: contactAdmin_template,
		link: function(scope, element, attributes){
			// $scope.addr = 
		}
	}
})