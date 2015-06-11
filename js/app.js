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
      $('.nav-call').on('click', function() {
        toggle = !toggle;
        if (toggle !== false) {
          sidePane.slidebars.open('left');
        }
      });
    }
  };
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
  .directive('noteArea', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/note-area.html',
      replace: true
    };
  });
