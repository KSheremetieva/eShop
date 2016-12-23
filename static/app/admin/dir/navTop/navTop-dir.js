import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../adminCtrl.js';
import navTop_template from './template/navTop.html';

app.directive('navtopDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: navTop_template,
		link: function(scope, element, attributes){
			scope.show = (arg) => {
				alert('hello')
			}
		}
	}
})