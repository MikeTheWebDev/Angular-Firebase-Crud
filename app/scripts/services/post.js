/**
 * Created by mike on 6/21/15.
 */
angular.module('angdashApp')

.factory('Post', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var posts = $firebase(ref.child('posts')).$asArray();

    var Post = {
      all: posts,
      create: function (post) {
        return posts.$add(post);
      },
      get: function (postId) {
        return $firebase(ref.child('posts').child(postId)).$asObject();
      },
      delete: function (post) {
        return posts.$remove(post);
      },
      update: function(postId) {
        return $firebase.$save(postId);
      }
    };

    return Post;
  });
