import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../feCtrl.js';
import about_template from './template/about.html';

app.directive('aboutDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: about_template,
		link: function(scope, element, attributes){
			
		}
	}
})