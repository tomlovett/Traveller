angular.module('Countries', [])

angular.module('Countries')
	.controller('Traveller', ['$scope', '$http', function($scope, $http) {

		$scope.loadCountries = function() {
			$http.get('/api/countries')
				.then(function(returnData) {
					$scope.countries = returnData.data
					console.log($scope.countries)
				})
		}

		$scope.search = function() {
			console.log($scope.searchText)
			$http.post('/api/search', $scope.searchText)
				.then(function(err, returnData) {
					console.log('yiiii')
				})
		}

}])