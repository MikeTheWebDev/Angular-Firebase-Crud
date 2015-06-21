'use strict';

angular.module('PostApp', [])

  .controller('PostCtrl', function($scope, Post) {
    // Without NgResource
    // Note.all().success(function(data) {
    //   $scope.notes = data;
    // });

    // With NgResource
    $scope.posts = Post.query();

  });
