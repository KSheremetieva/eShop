// import angular from "angular";
import {app} from '../app.js';
import '../mainCtrl';
// import './dir/navBar/navBar-dir.js';

 app.controller('feCtrl', function($scope){
 	$scope.feCtrl = 'feCtrl work';
 	
 	// CHANGE PAGE
 	$scope.page = 'Home';
 	$scope.changePage = (arg) => {
 		if(arg == 'Categories' || arg == 'Home'){
 			$.ajax({
 				method: 'GET',
 				dataType: 'json',
 				url: './mt_goods.json',
 			}).done(request=>$scope.categoryList(request))
 			.fail(request=>console.log('fail'))
 		}
 		$scope.page = arg;
 		$scope.prodFlag = false;
 		// console.log('2', $scope.page);
 	}

 	// CATEGORIES
 	$scope.goods;
 	$scope.topGoods1;
 	$scope.topGoods2;
 	$scope.categoryList = (request) => {
 		$scope.goods = request.goods;
 		$scope.topGoods1 = request.goods.slice(0,4);
 		$scope.topGoods2 = request.goods.slice(4,8);
 		$scope.$apply();
 		// console.info($scope.goods, $scope.topGoods1, $scope.topGoods2, $scope.prodList);
 	}

 	// //SHOPPING CART
 	// // $scope.topGoodsPrice1 = '499.99';
 	// // $scope.topGoodsPrice2 = '449.99';
 	// $scope.priceLaptop = '499.00';
 	// $scope.priceProps = '75.99';
 	// // $scope.initCart = false;
 	// $scope.shopCart = [];
 	// $scope.selectObj = {};
 	// $scope.addToCart = (item, price) => {
 	// 	// $scope.cartProd = item.name;
 	// 	// $scope.cartPrice = price;
 	// 	// $scope.initCart = true;
 	// 	$scope.selectObj.item = item;
 	// 	$scope.selectObj.price = price;
 	// 	$scope.shopCart.push($scope.selectObj);
 	// 	console.log($scope.shopCart)
 	// }
 })
  