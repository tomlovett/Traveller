angular.module('Countries', [])

angular.module('Countries')
	.controller('Traveller', ['$scope', '$http', function($scope, $http) {

		$scope.loadCountries = function() {
			$http.get('/api/loadCountries')
				.success(function(returnData) {
					$scope.countries = returnData.data
					console.log('$scope.countries: ', $scope.countries)
				}

		}

}])