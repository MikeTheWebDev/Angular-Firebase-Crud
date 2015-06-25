/**
 * Created by mike on 6/22/15.
 */
'use strict';

angular.module('angdashApp')

 .controller('PostsViewCtrl', function($scope, $routeParams, Post) {
    $scope.post = Post.get($routeParams.postId);
  });
