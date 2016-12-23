import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../feCtrl.js';
import stores_template from './template/stores.html';

app.directive('storesDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: stores_template,
		link: function(scope, element, attributes){
			
		}
	}
})