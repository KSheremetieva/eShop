import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../feCtrl.js';
import career_template from './template/career.html';

app.directive('careerDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: career_template,
		link: function(scope, element, attributes){
			
		}
	}
})