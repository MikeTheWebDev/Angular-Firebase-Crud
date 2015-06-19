'use strict';

/**
 * @ngdoc overview
 * @name angularCrudApp
 * @description
 * # angularCrudApp
 *
 * Main module of the application.
 */


.constant('FIREBASE_URL', 'https://crackling-inferno-8136.firebaseio.com/')
  .module('angularCrudApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'PostApp',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'views/posts/index.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
