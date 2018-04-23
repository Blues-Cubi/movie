(function(angular){
	'use strict';

	angular.module('movie.genres', ['ngRoute','movie.service.http'])

		.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/genres/:tag?', {
				templateUrl: 'genres/view.html',
				controller: 'GenresController'
			});
		}])

		.controller('GenresController',['$scope','$routeParams','HttpService', function($scope,$routeParams,HttpService) {
			$scope.subjects = [];
			$scope.genres = $routeParams['tag'];
			HttpService.jsonp('https://api.douban.com/v2/movie/search',{"tag":$routeParams['tag'],"count":18},function(data){
				$scope.subjects = data.subjects;
				console.log(data.subjects)
				$scope.$apply('subjects');
			})

		}]);

})(angular)
