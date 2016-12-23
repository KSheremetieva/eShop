import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../adminCtrl.js';
import help_template from './template/help.html';

app.directive('helpDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: help_template,
		link: function(scope, element, attributes){
			
		}
	}
})