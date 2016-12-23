import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../feCtrl.js';
import footer_template from './template/footer.html';

app.directive('footerDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: footer_template,
		link: function(scope, element, attributes){
			
		}
	}
})