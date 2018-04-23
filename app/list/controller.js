(function(angular){
	'use strict';

	angular.module('movie.list', ['ngRoute','movie.service.http'])

	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/list/:query?', {
			templateUrl: 'list/view.html',
			controller: 'ListController'
		});
	}])

	.controller('ListController',['$scope','HttpService','$routeParams', function($scope,HttpService,$routeParams) {
		$scope.subjects = [];

		var $query = $routeParams['query'];

		$scope.$watch('query',function(NewVal,OldVal){

			if(typeof ($query)!== 'undefined')
			{
				$scope.$watch('query',function() {
					HttpService.jsonp('https://api.douban.com/v2/movie/search', {'q': $query}, function (data) {
						$scope.subjects = data.subjects;
						$scope.$apply('subjects');
					})
				})

			}

		})

		//HttpService.jsonp('https://api.douban.com/v2/movie/' + $routeParams['type'],{},function(data){
		//	$scope.subjects = data.subjects;
		//	$scope.$apply('subjects');
		//})
	}]);

})(angular)
