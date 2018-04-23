/**
 * Created by Administrator on 2018/4/15.
 */

'use strict';

	// Declare app level module which depends on views, and components
	angular.module('movie', [
		'ngRoute',
		'movie.movie_list',
		'movie.home',
		'movie.genres',
		'movie.list',
		'movie.movie_detial'

	])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({redirectTo: '/home'});
	}])
	.controller('SearchController',['$scope','$location',function($scope,$location){
		$scope.input = '';
		$scope.search = function(){
			$location.url('/movie_list/search?q=' + $scope.input);
			console.log(11111111);
		}


	}]);

$(function(){
//$('#navigation > #carousel-movie > .carousel-inner .carousel-caption > .form-group > input').val('Six children, genetically cross-bred with avian DNA, take flight around the country to discover their origins. Along the way, their mysterious past is ...');
	function resize(){
		var CapHeight = $('#navigation > #carousel-movie > .carousel-inner >.active .carousel-caption').height() + 20;
		var CapWidth = $('#navigation > #carousel-movie > .carousel-inner >.active .carousel-caption').width() + 140;
		var CtrHeigth = $('#navigation > .carousel > .left').height() + 2;
		var $Ctr =  $('#navigation > .carousel > .left,#navigation > .carousel > .right');
		var $CtrRight = $('#navigation > .carousel > .right');
		var CtrRightLeft  = CapWidth - 50; //CapWidth - 40- 10

		//$Ctr.css('bottom',CapHeight/2 + 'px');
		//$Ctr.css('margin-bottom',-CtrHeigth/2 + 'px');
		//$CtrRight.css('left',CtrRightLeft + 'px');

		var $WindowWidth = $(window).width();

		var $Movie_content = $(' #popular > .container > #carousel-movie-popular > .carousel-inner .carousel-caption');
		var $ImgHeight = $('#popular > .container > #carousel-movie-popular > .carousel-inner>.item.active> img').height();
		var $itemHeight = $('#popular > .container > #carousel-movie-popular > .carousel-inner > .item')

		//if(window.innerWidth < 992){
		//	$Movie_content.css('top',$ImgHeight + 'px');
		//	$Movie_content.css('height',$ImgHeight + 'px');
		//	$itemHeight.css('height',$ImgHeight * 2 +'px');
		//}
		//else
		//{
		//	$Movie_content.css('top','0');
		//	$Movie_content.css('height','100%');
		//	$itemHeight.css('height','auto');
		//}
	}
	//屏幕切换的时候有可能有需要改变一下
	$(window).on("resize",resize).trigger('resize');

	$('#to-top').on("click",function(){
		$('body,html').animate({ scrollTop: 0 }, 800);
	})

})
