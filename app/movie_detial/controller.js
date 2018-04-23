(function(angular){
	'use strict';

	angular.module('movie.movie_detial', ['ngRoute','movie.service.http'])

	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/movie_detial/:id', {
			templateUrl: 'movie_detial/view.html',
			controller: 'Movie_DetialController'
		});
	}])

	.controller('Movie_DetialController',['$scope','HttpService','$routeParams', function($scope,HttpService,$routeParams) {
		$scope.movie = [];

		HttpService.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams['id'] ,{},function(data){
			$scope.movie = data;
			$scope.$apply('subjects');
			console.log(data);
		})

		//if($routeParams['type'] === 'search')
		//{
		//	HttpService.jsonp('https://api.douban.com/v2/movie/search',{"q":$routeParams.q},function(data){
		//		$scope.subjects = data.subjects;
		//		$scope.$apply('subjects');
		//		console.log(data);
		//	})
        //
		//}
		//else {
		//	HttpService.jsonp('https://api.douban.com/v2/movie/' + $routeParams['type'],{},function(data){
		//		$scope.subjects = data.subjects;
		//		$scope.$apply('subjects');
		//	})
        //
		//}

	}]);

})(angular)
