import {app} from '../../app.js';
import  '../../mainCtrl.js';
import '../adminCtrl.js';
import admin_template from './template/mainAdmin.html';

app.directive('adminDir', function(){
	return{
		restrict: 'E',
		replase: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: admin_template,
		link: function(scope, element, attributes){
			// scope.adminDir = 'adminDir work';
		}
	}
}) 