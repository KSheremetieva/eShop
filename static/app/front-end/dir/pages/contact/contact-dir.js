import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../feCtrl.js';
import contact_template from './template/contact.html';

app.directive('contactDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: contact_template,
		link: function(scope, element, attributes){
			
		}
	}
})