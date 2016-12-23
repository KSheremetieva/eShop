import {app} from '../../../../app.js';
import  '../../../../mainCtrl.js';
import '../../../adminCtrl.js';
import dashboard_template from './template/dashboard.html';

app.directive('dashboardDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: dashboard_template,
		link: function(scope, element, attributes){
			
		}
	}
})