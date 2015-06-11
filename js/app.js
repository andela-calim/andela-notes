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
        $scope.deleteNote = function(note,key) {
          var response = confirm("Are you sure you want to delete this note");
          if(response === true){
            delete $scope.allNotes[key];
          }
        };

      }],
      link: function(scope, elem, attr) {
        var el = elem.find('.single-list');
        var sideBar = angular.element('.sidebar');
        var delBtn = el.find('.deleteBtn');
        // var syncWhite = el.find('.icon--white');
        var syncGreen = el.find('.icon--green');
        console.log(syncGreen);

        elem.find('.list-row__content').on('click', function(){
          sideBar.find('li').removeClass('active');
          $(elem).addClass('active');
        });
        elem.find('.list-row__content').on('click', function(){
          el.find('.icon--green').removeAttr("style");
          el.find('.icon--green').css("visibility", "visible");
          // syncWhite.css('visibility': 'hidden');
          // syncGreen.css('visibility': 'visible');
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
