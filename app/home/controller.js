(function(angular){
	'use strict';

	angular.module('movie.home', ['ngRoute','movie.service.http'])

		.config(['$routeProvider',function($routeProvider) {
			$routeProvider.when('/home', {
				templateUrl: 'home/view.html',
				controller: 'HomeController'
			});
		}])

		.controller('HomeController',['$scope','$http','HttpService', function($scope,$http,HttpService) {
			$scope.subjects = [];
			console.log('home control');
			//HttpService.jsonp('https://api.douban.com/v2/movie/in_theaters',{},function(data){
			//	$scope.subjects = data.subjects;
			//	$scope.$apply('subjects');
			//	console.log(data);
			//})
			$http.get('data.json').then(function(res){
				if(res.status == 200)
				{
					$scope.subjects = res.data.subjects;
					$scope.new = res.data.new;
					$scope.comming_soon = res.data.comming_soon;
					$scope.top = res.data.top;
					$scope.popular =[];
					$scope.popular[0] = $scope.subjects[0];
					$scope.popular[1] = $scope.subjects[1];

					$('.carousel').carousel()
				}

			}, function(err){
				console.log(err);
			});

		}]);

})(angular)
