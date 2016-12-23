import {app} from '../../app.js';
import  '../../mainCtrl.js';
import '../feCtrl.js';
import fe_template from './template/mainFe.html';

app.directive('feDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: fe_template,
		link: function(scope, element, attributes){
			scope.fe = 'feDir works';
		}
	}
}) 