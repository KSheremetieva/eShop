import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../feCtrl.js';
// import '../product/product-dir';
import cat_template from './template/cat.html';

app.directive('catDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: cat_template,
		link: function(scope, element, attributes){

		}
	}
})