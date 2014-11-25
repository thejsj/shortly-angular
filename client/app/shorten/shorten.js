angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  if (!Auth.isAuth()) {
    $location.path('/signin')
  }
  angular.extend($scope, Links);
  $scope.link = {
    val: ''
  };
});
