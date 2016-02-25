angular.module('Countries', [])

angular.module('Countries')
	.controller('Traveller', ['$scope', '$http', function($scope, $http) {

		$scope.loadCountries = function() {
			$http.get('/api/countries')
				.then(function(returnData) {
					$scope.earth = returnData.data
				})

		}

		$scope.search = function() {
			$http.post('/api/search', {search: $scope.searchText})
				.then(function(returnData) {
					console.log(returnData)
					if (returnData) {
						$scope.earth = returnData.data
					}
				})
		}

		$scope.markTravelled = function(country) {
			$http.post('/api/travelled', country)
				.then(function(returnData) {
					console.log('updated: ', returnData.data)
				})
		}

}])