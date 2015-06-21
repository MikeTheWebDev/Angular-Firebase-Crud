/**
 * Created by mike on 6/20/15.
 */
angular.module('PostApp')
  .factory('Post', function PostFactory($resource) {
    return $resource('https://crackling-inferno-8136.firebaseio.com/posts:id.json', {}, {
      update: {
        method: "PUT"
      }
    });
  });
