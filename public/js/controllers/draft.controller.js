"use strict";

var app = angular.module('FantasyFootball');

app.controller('DraftDayController', function($scope, DraftDayService) {
  // var pData = $scope.plyrData;

  $scope.players = DraftDayService;

  $scope.test = {
    "PLAYER":"Cam Newton",
    "POS": "QB",
    "TEAM":"CAR",
    "BYE": 5,
    "PLAYS":628,
    "FPTS":455,
    "GP":16,
    "FPTSG":28.47,
    "RUN":132,
    "RYD":636,
    "RTD":10,
    "PASS":496,
    "CMP":296,
    "PASSPER": 59.67,
    "PYDS":3837,
    "PTD":35,
    "FUM":4,
    "INT":10,
    "PTSTD": 25.4566,
    "HI": 44.8,
    "LOW": 13.8,
    "HILOSTD": 21.920,
    "YPR": 4.8181,
    "YAC": "N/A",
    "PERT": 98,
    "RANDO": "DERP",
    "DC": 1
  }

  $scope.threeYrStats = {
    "PLAYER":"selectedPlayer", //AS EXAMPLE
    "RYDS2013": 585,
    "RTD2013": 6,
    "PYDS2013": 3379,
    "PTD2013": 24,
    "RYDS2014": 539,
    "RTD2014": 5,
    "PYDS2014": 3127,
    "PTD2014": 18,
    "RYDS2015": 636,
    "RTD2015": 10,
    "PYDS2015": 3837,
    "PTD2015": 35,
    "RYDPer": 48.521,
    "PYDPer": 359.95,
    "RTDPer": 2.645,
    "PTDPer": 8.631
  }

  $scope.stats = {
    //(dd-my-metrics.xlsx)
    'fpts': 409.3,
    'appw': 23.69,
    'ptstd': 8.607,
    'wkhigh': 34.2,
    'wklow': 4.8,
    'hilostd': 20.789,
    'gp': 16,
    'pyprice': 6,
    'pyrank': 2,
    // End (dd-my-metrics.xlsx)
    'adp': 42, // TODO
    'consensus': 2 //The Fantasy Footballers (TFF Ranks.xlsx)
  }
  $scope.posstats = {
    //(dd-stats.xlsx)
    'plays': 659,
    'run': 34,
    'ryd': 636,
    'ypr': 1.6,
    'rtd': 3,
    'pass': 64.42,
    'pyds': 3837,
    'ptd': 36,
    'fum': "NA",
    'int': 7,
    // End(dd-stats.xlsx)
    // Additional Metrics
    'sspd': true
    // End Additional Metrics
  }
  $scope.filler = {
    'avg$': 21,
    'high$': 22,
    'low$': 20,
    'stdev$': 0.957
  }

  $scope.plyrData = {
    "PLAYER":"Cam Newton",
    "NFL":"CAR",
    "PLAYS":628,
    "FPTS":397,
    "GP":16,
    "FPTS/G":24.82,
    "RUN":132,
    "RYD":636,
    "YPR":4.818181818,
    "RTD":10,
    "PASS":496,
    "CMP":296,
    "PsPer":59.68,
    "PYDS":3837,
    "PTD":35,
    "FUM":"NA",
    "INT":10
  }

  $scope.playerScore = function(player) {
    var ps = 0;
    if (player.PsPer > 60) {
      ps += 1;
    } else {
      ps -= 0
    }
    if (player.PTD > 30) {
      ps += 5;
    } else {
      ps -= 1;
    }
    return ps;
  }

  // Keeping the following ...

  $scope.ffLY = function() {
    var lastYear = new Date().getFullYear() - 1;
    return lastYear;
  }

  $scope.ffLY2 = function() {
    var twoYrsAgo = new Date().getFullYear() - 2;
    return twoYrsAgo;
  }

  $scope.ffLY3 = function() {
    var threeYrsAgo = new Date().getFullYear() - 3;
    return threeYrsAgo;
  }

  $scope.priceIncrement = function() {
    var count = 0;
    count += 1;
    return count;
  }

});
