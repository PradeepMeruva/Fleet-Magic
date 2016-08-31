angular.module('fleetMagic').controller('CustomerController', ['$scope', '$http', '$state', 'ClientConfig', function ($scope, $http, $state, ClientConfig) {
	$scope.searchCriteria={};
	$scope.searchCriteria.type = "mobile";
    $scope.customers ={}
    $scope.error=null;
    $scope.search = function (){
        $scope.error=null;
        var url =null;
        console.log($scope.searchCriteria);
        if($scope.searchCriteria.type=="mobile"){
            url = ClientConfig.CLIENT_BASE_URL + "customer/mobile/"+$scope.searchCriteria.mobile;

        }else if($scope.searchCriteria.type=="email"){
            url = ClientConfig.CLIENT_BASE_URL + "customer/email/"+$scope.searchCriteria.email

        }else{
            url = ClientConfig.CLIENT_BASE_URL + "customers/firstName/"+$scope.searchCriteria.firstName+"/lastName/"+$scope.searchCriteria.lastName;
        }
        $http.get(url).success(function (data) {
            $scope.customers = data;
            if ($scope.customers.length == 0){
                $scope.error="No Records Found.";
            }
        }).error(function (err) {
            $scope.error="Error While Searching..  Try Again";
            console.log(err);
        });
    } ;
}]);