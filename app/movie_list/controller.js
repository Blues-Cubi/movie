(function(angular){
	'use strict';

	angular.module('movie.movie_list', ['ngRoute','movie.service.http'])

	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/movie_list/:type', {
			templateUrl: 'movie_list/view.html',
			controller: 'Movie_ListController'
		});
	}])

	.controller('Movie_ListController',['$scope','HttpService','$routeParams', function($scope,HttpService,$routeParams) {
		$scope.subjects = [];
		$scope.address = $routeParams['type'];

		console.log($routeParams['type']);

		if($routeParams['type'] === 'search')
		{
			HttpService.jsonp('https://api.douban.com/v2/movie/search',{"q":$routeParams.q},function(data){
				$scope.subjects = data.subjects;
				$scope.$apply('subjects');
				console.log(data);
			})

		}
		else {
			HttpService.jsonp('https://api.douban.com/v2/movie/' + $routeParams['type'],{},function(data){
				$scope.subjects = data.subjects;
				$scope.$apply('subjects');
			})

		}

	}]);

})(angular)
