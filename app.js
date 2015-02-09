angular.module('qr', [])

.controller('MainCtrl', function($scope) {

	$scope.qr = {
		data: "",
		height: 300,
		width: 300
	};

	$scope.calculateUrl = function(){
		return 'https://chart.googleapis.com/chart?cht=qr&chs=' + $scope.qr.width + 'x' + $scope.qr.height + "&chl=" +  encodeURIComponent($scope.qr.data);
	}
});