import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../adminCtrl.js';
import categAdmin_template from './template/categoriesAdmin.html';

app.directive('categadminDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: categAdmin_template,
		link: function(scope, element, attributes){
			
		}
	}
})