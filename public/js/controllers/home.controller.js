"use strict";

var app = angular.module('FantasyFootball');

app.controller('HomeController', function($scope, DraftDayService, SortPlayerService) {

  $scope.items = DraftDayService;
  $scope.qbs = SortPlayerService.qbsArr;
  $scope.rbs = SortPlayerService.rbsArr;
  $scope.wrs = SortPlayerService.wrsArr;
  $scope.tes = SortPlayerService.tesArr;
  $scope.defs = SortPlayerService.defsArr;
  $scope.ks = SortPlayerService.ksArr;

// Potentially remove

  $scope.sortViewPositions = ['All', 'QBs', 'RBs', 'WRs', 'TEs', 'DSTs', 'Ks'];
  $scope.selection = $scope.sortViewPositions[0];

  $scope.sort = {
      column: '',
      descending: false
  };
  $scope.changeSorting = function(column) {

      var sort = $scope.sort;

      if (sort.column === column) {
          sort.descending = !sort.descending;
      } else {
          sort.column = column;
          sort.descending = false;
      }
  };

});
