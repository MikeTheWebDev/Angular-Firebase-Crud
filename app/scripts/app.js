'use strict';

/**
 * @ngdoc overview
 * @name angularCrudApp
 * @description
 * # angularCrudApp
 *
 * Main module of the application.
 */


  angular.module('angularCrudApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'PostApp'
  ])

    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/posts/index.html',
          controller: 'PostsCtrl'
        });
      });

