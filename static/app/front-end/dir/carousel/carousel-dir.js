import {app} from '../../../app.js';
import  '../../../mainCtrl.js';
import '../../feCtrl.js';
import carousel_template from './template/carousel.html';

app.directive('carouselDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: ('mainCtrl', 'feCtrl'),
		template: carousel_template,
		link: function(scope, element, attributes){
			
		}
	}
})