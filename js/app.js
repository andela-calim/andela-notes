'use strict';
// $.material.init();

var app = angular.module('andeNote', [])

.directive('header', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/header.html',
      replace: true
    };
  })
  .directive('sidebar', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/sidebar.html',
      replace: true
    };
  })
  .directive('noteArea', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/note-area.html',
      replace: true
    };
  })
  .directive('changeBg', function() {
    return {
      restrict: 'A',
      link: function(scope, elm) {
        var elem = $(elm[0]);
        scope.$watch('changeBg', function(newVal) {
          if (newVal) {
            elem.addClass('bg');
          }
        });
      }
    };
  });
