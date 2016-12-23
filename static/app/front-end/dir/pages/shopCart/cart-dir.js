import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../feCtrl.js';
import cart_template from './template/cart.html';

app.directive('cartDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: cart_template,
		link: function(scope, element, attributes){
			
		}
	}
})