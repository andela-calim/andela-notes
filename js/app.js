'use strict';

var app = angular.module('andeNote', ['lumx'])

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
      replace: true,
      controller: ['$scope', function($scope) {
        // $scope.selected = false;

        $scope.allNotes = [
          {
            title: "Good design qualities",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            isSelected: false
          },
          {
            title: "Demo Title",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            isSelected: false
          },
          {
            title: "Untitled",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            isSelected: false
          }
        ];

        $scope.currentIndex = null;

        $scope.selectNote = function($index) {
          if($scope.currentIndex !== null) {
            $scope.allNotes[$scope.currentIndex].isSelected = false;
          }
          $scope.allNotes[$index].isSelected = true;
          $scope.currentIndex = $index;

          //If syncing is NOT in progress set syncing to false
          // var syncing = true;        
        };
      }]
    };
  })
  .directive('noteArea', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/note-area.html',
      replace: true
    };
  });
