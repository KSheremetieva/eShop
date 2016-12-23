import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../adminCtrl.js';
import aboutAdmin_template from './template/aboutAdmin.html';

app.directive('aboutadminDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: aboutAdmin_template,
		link: function(scope, element, attributes){
			
		}
	}
})