import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../adminCtrl.js';
import sideBar_template from './template/sideBar.html';

app.directive('sidebarDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: sideBar_template,
		link: function(scope, element, attributes){
			
		}
	}
})