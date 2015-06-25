/**
 * Created by mike on 6/21/15.
 */
angular.module('angdashApp')

  .controller('PostsCtrl', function ($scope, $location, Post) {
    $scope.posts = Post.all;
    $scope.post = {url: 'http://', 'title': ''};


    /** Moved to nav.js
    $scope.submitPost = function () {
      Post.create($scope.post).then(function (ref) {
       $location.path('/posts/' + ref.name());
      });
    };
     **/

    $scope.deletePost = function (post) {
      Post.delete(post);
    };

  });
