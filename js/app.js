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
  .directive('noteList', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/note-list.html',
      replace: true,
      controller: ['$scope', function($scope) {
        $scope.deleteNote = function(note, key) {
          var response = confirm("Are you sure you want to delete this note");
          if (response === true) {
            $scope.allNotes.splice($scope.allNotes.indexOf(note), key);
          }
        };
      }]
    }
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
        scope.$watch('changeBg', function() {
          if (typeof scope.changeBg === 'undefined') {return;}
          elem.toggleClass('bg');
        });
      }
    };
  });
