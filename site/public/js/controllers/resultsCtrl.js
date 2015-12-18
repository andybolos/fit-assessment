app.controller('resultsCtrl', function($scope, mainService, getFullResults, $stateParams) {

	$scope.assessment = getFullResults.assessment;
	
	$scope.concern = getFullResults.results.concern;
	console.log(getFullResults);
	$scope.text = getFullResults.resultsText;
});
