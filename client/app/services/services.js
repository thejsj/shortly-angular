angular.module('shortly.services', [])

.factory('Links', function ($http, $filter) {
  // Your code here
  var links = {};
  var orderBy = $filter('orderBy');

  links.data = [];

  links.getLinks = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      links.data.links = resp.data;
      links.order();
      return links.data;
    });
  };

  links.addLink = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {
        url: link.val
      }
    })
    .then(function (resp) {
      link.val = '';
      links.data.push(resp);
      links.order();
      return resp;
    });
  };

  links.order = function() {
    links.data.links = orderBy(links.data.links, 'visits', true);
  };

  return links;
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
