angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searching = '';
    $scope.display= false;
    var displayBool = false;
    /* Implement these functions in the controller to make your application function
      as described in the assignment spec. */
    $scope.addListing = function() {
      $scope.listings.push({
        code:$scope.code,
        name:$scope.name,
        coordinates: {lattitude:$scope.lat, longitude:$scope.long},
        address:$scope.address
      });
      $scope.empty = function(){
        /*$scope.name*/
      }
      $scope.Restart();
      $scope.listings.reload();
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice($scope.listings.indexOf(index), 1);
    };
    $scope.showDetails = function(index) {

      $scope.detailedInfo = index;
    };
    $scope.getDetails = function(at){
      return $scope.listings[$scope.listings.indexOf(at)].code;
    };
  }
]);
