import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../feCtrl.js';
import product_template from './template/product.html';

app.directive('productDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: product_template,
		link: function(scope, element, attributes){

		}
	}
})