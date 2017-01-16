angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function(item) {
      $scope.listings.push(item);
    };
    $scope.deleteListing = function(item) {
      for (var i = 0; i < $scope.listings.length; i++) {
        if ($scope.listings[i].code === item.code) {
          $scope.listings.splice(i, 1);
        }
      }
    };
    $scope.showDetails = function(item) {
      $scope.detailedInfo = item;
    };
  }
]);