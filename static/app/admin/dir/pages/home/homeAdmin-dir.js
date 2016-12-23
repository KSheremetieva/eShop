import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../adminCtrl.js';
import homeAdmin_template from './template/homeAdmin.html';

app.directive('homeadminDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: homeAdmin_template,
		link: function(scope, element, attributes){
			
		}
	}
})