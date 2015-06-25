'use strict';

/**
 * @ngdoc overview
 * @name angdashApp
 * @description
 * # angdashApp
 *
 * Main module of the application.
 */
angular
  .module('angdashApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://crackling-inferno-8136.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts/index.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/posts/show.html',
        controller: 'PostsViewCtrl'
      }),
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      }),
      .otherwise({
        redirectTo: '/'
      });
  });
