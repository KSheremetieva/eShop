import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../feCtrl.js';
import circle_template from './template/circle.html';

app.directive('circleDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: circle_template,
		link: function(scope, element, attributes){
			
		}
	}
})