import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../adminCtrl.js';
import signIn_template from './template/signin.html';

app.directive('signinDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'adminCtrl'),
		template: signIn_template,
		link: function(scope, element, attributes){
			
		}
	}
})