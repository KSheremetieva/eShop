import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../adminCtrl.js';
import overview_template from './template/overview.html';

app.directive('overviewDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: overview_template,
		link: function(scope, element, attributes){
			
		}
	}
})