import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../feCtrl.js';
import marketing_template from './template/marketing.html';

app.directive('marketingDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: marketing_template,
		link: function(scope, element, attributes){
			
		}
	}
})