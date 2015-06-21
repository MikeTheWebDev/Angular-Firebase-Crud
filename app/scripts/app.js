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
    'PostApp',
    'firebase'
  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the notes index
      redirectTo: '/posts'
    })

    .when('/users', {
      templateUrl: 'templates/pages/users/index.html',
      controller: 'UsersIndexController'
    })

    .when('/users/:id', {
      templateUrl: 'templates/pages/users/show.html',
      controller: 'UsersShowController'
    })

    .when('/posts', {
      templateUrl: 'views/posts/index.html',
      controller: 'PostCtrl'
    })

    .when('/posts/new', {
      templateUrl: 'templates/pages/notes/edit.html',
      controller: 'PostCreateController'
    })

    .when('/post/:id', {
      templateUrl: 'views/posts/show.html',
      controller: 'PostShowController'
    })

    .when('/posts/:id/edit', {
      templateUrl: 'templates/pages/notes/edit.html',
      controller: 'NotesEditController'
    })

    .when('/profile/edit', {
      templateUrl: 'templates/pages/profile/edit.html',
      controller: 'ProfileEditController'
    })

    .otherwise({redirectTo: '/'});
}]);
