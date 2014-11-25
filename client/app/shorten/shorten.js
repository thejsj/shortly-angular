angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  angular.extend($scope, Links);
  $scope.link = {
    val: ''
  }; // Is this value the same a what's currently in ng-model='link'

  // $scope.checkLink = function (link) {
  //   if (true) {
  //     $scope.addLink(link);
  //   } else {
  //     $scope.showErrors();
  //   }
  // };

  // $scope.showErrors = function () {

  // };

});
