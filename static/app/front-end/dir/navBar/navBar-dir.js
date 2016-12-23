import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../feCtrl.js';
import navBar_template from './template/navBar.html';

app.directive('navbarDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: navBar_template,
		link: function(scope, element, attributes){
			// scope.signinFlag = true;
			// scope.signin = () =>{
			// 	scope.signinFlag = false;
			// }
			// scope.$watch(()=>scope.signinFlag, newValue=>scope.al())
		}
	}
})  