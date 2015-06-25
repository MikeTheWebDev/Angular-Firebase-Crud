'use strict';

angular.module('angdashApp')

  .filter('hostnameFromUrl', function(){
    return function(str) {
      var url = document.createElement('a');
      url.href = str;
      return url.hostname;
    }
  });
