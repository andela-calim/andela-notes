'use strict';

app.controller('NoteCtrl', ['$scope', function($scope) {
  $scope.test = 'working!';

  $scope.showNote = function() {
    $scope.activeNote = true;
    $scope.syncNote   = true;

    //If syncing is NOT in progress set syncing to false
    // $scope.syncing = false;
  };

}]);
