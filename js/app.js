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
  .directive('noteList', function(){
    return{
      restrict: 'E',
      templateUrl:'templates/note-list.html',
      replace: true,
      controller: ['$scope', function($scope) {
        $scope.deleteNote = function(note, key) {
          var response = confirm("Are you sure you want to delete this note");
          if(response === true){
            $scope.allNotes.splice($scope.allNotes.indexOf(note), key);
          }
        };

      }],
      link: function(scope, elem, attr) {
        var el = elem.find('.single-list');
        var sideBar = angular.element('.sidebar');
        var delBtn = el.find('.deleteBtn');

        elem.find('.list-row__content').on('click', function(){
          sideBar.find('li').removeClass('active');
          $(elem).addClass('active');
        });
      }
    }
  })
  .directive('noteArea', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/note-area.html',
      replace: true
    };
  });
