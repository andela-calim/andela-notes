'use strict';
// $.material.init();

var app = angular.module('andeNote', [])
  .directive('mobileHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/mobile-header.html',
      replace: true,
      link: function (scope, element) {
        var sidePane = new $.slidebars();
        var toggle = false;
        $('.view-notes').on('click', function(){
          $('.f-tools').trigger('click');
        });
        $('.nav-call').on('click', function() {
          toggle = !toggle;
          if (toggle !== false) {
            sidePane.slidebars.open('left');
          }
        });
      }
    };
  })
  .directive('mNoteArea', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/m-note-area.html',
      replace: true,
      link: function (scope, element) {
      }
    }
  })
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
