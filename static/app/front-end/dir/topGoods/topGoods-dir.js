import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../feCtrl.js';
import topGoods_template from './template/topGoods.html';

app.directive('topgoodsDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: topGoods_template,
		link: function(scope, element, attributes){
			
		}
	}
})