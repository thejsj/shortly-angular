angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  if (!Auth.isAuth()) {
    $location.path('/signin')
  }
  angular.extend($scope, Links);
  $scope.getLinks()
    .then();
});
