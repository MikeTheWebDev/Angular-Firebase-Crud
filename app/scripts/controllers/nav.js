/**
 * Created by mike on 6/23/15.
 */
'use strict';

angular.module('angdashApp')
.controller('NavCtrl', function ($scope, $location, Post) {
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.name());
      $scope.post = {url: 'http://', title: ''};
    });
  };

});
