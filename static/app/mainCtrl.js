import {app} from './app.js'; 
import './admin/adminCtrl.js';
import './front-end/feCtrl.js';

var images = [
	{page: 'contact',
	img: '/img/contact.png'}
];

app.controller('mainCtrl', function($scope){
	$scope.testimg = images;
 	$scope.mainCtrl = 'mainCtrl work';
 	$scope.openDir = 'Go to Front-End';
 	// 'Go to Front-End'
 	// 'Go to Admin'
 	$scope.showDir = (arg) => {
 		$scope.openDir = (arg);
 	}
 	$scope.signInFlag = false;
 	$scope.email;
 	$scope.pass;
  
 	// SIGN IN
 	$scope.signInError = false;
 	$scope.getData = (email, pass) => {
 		// console.log('check');
 		if(email != undefined && pass != undefined){
 			if(!!$scope.signInError){
 				$scope.signInError = false;
 			}
 			$.ajax({
				method: 'GET',
				dataType: 'json',
				url: './document.json',
			}).done(request=>$scope.checkData(request,email, pass))
			.fail(request=>console.error('fail'));
 		}else{
 			$scope.signInError = true;
 		}
 	}
 	$scope.checkData = (request,email, pass) => {
 		$scope.users = request.users;
 		// console.info($scope.users, email, pass);
 		for(let i = 0; i<($scope.users).length; i++){
 			if(($scope.users)[i].email == email && ($scope.users)[i].pass == pass){
 				$scope.signInFlag = true;
 				$scope.showDir('Go to Admin');
 			}else{
 				$scope.signInError = true;
 				$scope.$apply();
 				console.warn('Invalid data');
 			}
 		}
 	}

 	// SIGN OUT
 	$scope.signOut = () => {
 		$scope.signInFlag = false;
 		$scope.showDir('Go to Front-End');
 	}

 	$scope.openProductFlag = false;
 	// OPEN PRODUCTS
 	$scope.dirProd = (arg) => {
 		// console.log('4',$scope.openProductFlag);
 		if($scope.openProductFlag == false){
 		 		$scope.openProductFlag = true;
 		 	}
		$scope.propsList = arg;
		// console.log($scope.propsList);
	}
	$scope.changeProductFlag = () => {
		// console.log($scope.openProductFlag);
		if(!!$scope.openProductFlag){
			$scope.openProductFlag = false;
		}
	}

 	//SHOPPING CART
 	// $scope.topGoodsPrice1 = '499.99';
 	// $scope.topGoodsPrice2 = '449.99';
 	// $scope.priceLaptop = '499.00';


 	// $scope.shopCart = [];
 	// $scope.addToCart = (item, price) => {
 	// 	console.log(item, price)
 	// }


 	//SHOPPING CART
 	// $scope.topGoodsPrice1 = '499.99';
 	// $scope.topGoodsPrice2 = '449.99';
 	$scope.priceLaptop = '499.00';
 	$scope.priceProps = '75.99';
 	// $scope.initCart = false;
 	$scope.shopCart = [];
 	$scope.selectObj = {};
 	$scope.addToCart = (item, price) => {
 		// $scope.cartProd = item.name;
 		// $scope.cartPrice = price;
 		// $scope.initCart = true;
 		$scope.selectObj.item = item;
 		$scope.selectObj.price = price;
 		$scope.shopCart.push($scope.selectObj);
 		console.log($scope.shopCart)
 	}

 })