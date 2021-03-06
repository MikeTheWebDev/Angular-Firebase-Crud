/**
 * Created by mike on 6/23/15.
 */
'use strict';

angular.module('angdashApp')
.controller('NavCtrl', function ($scope, $location, Post, Auth) {
  $scope.post = {url: 'http://', title: ''};
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;

  $scope.user = Auth.user;

  $scope.submitPost = function () {
  $scope.post.creator = $scope.user.profile.username;
  $scope.post.creatorUID = $scope.user.uid;
  Post.create($scope.post).then(function (ref) {
    $location.path('/posts/' + ref.name());
    $scope.post = {url: 'http://', title: ''};
  });
};

});
