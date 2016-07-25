"use strict";

var app = angular.module('FantasyFootball');

app.controller('DraftDayController', function($scope, DraftDayService, RosterService) { // dep Injection: rosterData
  // var pData = $scope.plyrData;

  // $scope.viewRoster = rosterData;

  $scope.players = DraftDayService;

  $scope.myQBs = [];
  $scope.myRBs = [];
  $scope.myWRs = [];
  $scope.myTEs = [];
  $scope.myDEFs = [];
  $scope.myKckr = [];

  $scope.rmPlyr = function() {
    var all = $scope.players
    var selp = $scope.selectedPlayer;
    for (var i = 0; i < all.length; i++) {
      if(all[i].player === selp.player) {
        all.splice(i, 1);
      }
    }
  }

  $scope.alrtUsr = function() {
    swal("Hey now...", "You trying to break my app?!", "error");
  }

  $scope.addPlayer = function() {
    var all = $scope.players
    var selp = $scope.selectedPlayer;
    var acquiredPlayer = {};
    // acquiredPlayer.position = $scope.plyrPos;
    acquiredPlayer.player = selp.player;
    acquiredPlayer.price = $scope.cpVal.level;
    acquiredPlayer.bye = selp.bye;

    if ($scope.myQBs.length === 3) {
      $scope.alrtUsr();
    }
    if (selp.pos === 'QB' && $scope.myQBs.length < 3) {
      $scope.myQBs.push(acquiredPlayer);
      $scope.rmPlyr();
    }
    if ($scope.myRBs.length === 5) {
      $scope.alrtUsr();
    }
    if (selp.pos === 'RB' && $scope.myRBs.length < 5) {
      $scope.myRBs.push(acquiredPlayer);
      $scope.rmPlyr();
    }
    if ($scope.myWRs.length === 6) {
      $scope.alrtUsr();
    }
    if (selp.pos === 'WR' && $scope.myWRs.length < 6) {
      $scope.myWRs.push(acquiredPlayer);
      $scope.rmPlyr();
    }
    if ($scope.myTEs.length === 3) {
      $scope.alrtUsr();
    }
    if (selp.pos === 'TE' && $scope.myTEs.length < 3) {
      $scope.myTEs.push(acquiredPlayer);
      $scope.rmPlyr();
    }
    if($scope.myDEFs.length === 2) {
      $scope.alrtUsr();
    }
    if (selp.pos === 'DEF' && $scope.myDEFs.length < 2) {
      $scope.myDEFs.push(acquiredPlayer);
      $scope.rmPlyr();
    }
    if ($scope.myKckr.length === 1) {
      swal({
        title: "Seriously...",
        text: "Are you Taco or something??",
        imageUrl: "images/tickotaco.jpg"
      })
    }
    if ($scope.myKckr.length === 2) {
      swal("Great Job!", "You have no chance of winning in this league!");
    }
    if (selp.pos === 'K' && $scope.myKckr.length < 2) {
      $scope.myKckr.push(acquiredPlayer);
      $scope.rmPlyr();
    }
    $scope.selectedPlayer = '';
    $scope.cpVal.level = $scope.cpVal={level: 1};
  }

  $scope.passPlayer = function() {
    swal({
      title: "Are you sure?",
      text: "Once removed, you will not be able to access this player",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Remove player",
      cancelButtonText: "No, Keep player",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function(isConfirm) {
      if(isConfirm) {
        // TODO this is buggy, it executes rmPlyr but won't clear the section
        $scope.rmPlyr()
        $scope.clearSelected();
        swal("Deleted!", "Player no longer available", "success");
      } /* else {
        swal("Cancelled", "Player is still available", "error");
      } */
    })
    // TODO Remove from available in selectedPlayer array
    // $scope.selectedPlayer.splice
  }

  $scope.clearSelected = function() {
    $scope.selectedPlayer = '';
    $scope.cpVal.level = $scope.cpVal={level: 1};
  }

  $scope.oopsBtn = function(player) {
    var qbArr = $scope.myQBs;
    var rbArr = $scope.myRBs;
    var wrArr = $scope.myWRs;
    var teArr = $scope.myTEs;
    var defArr = $scope.myDEFs;
    var kckrArr = $scope.myKckr;
    // console.log('player: ', player);
    for (var i = 0; i < qbArr.length; i++) {
      if (qbArr[i].player === player.player) {
        qbArr.splice(i, 1);
      }
    }
    for (var i = 0; i < rbArr.length; i++) {
      if (rbArr[i].player === player.player) {
        rbArr.splice(i, 1);
      }
    }
    for (var i = 0; i < wrArr.length; i++) {
      if (wrArr[i].player === player.player) {
        wrArr.splice(i, 1);
      }
    }
    for (var i = 0; i < teArr.length; i++) {
      if (teArr[i].player === player.player) {
        teArr.splice(i, 1);
      }
    }
    for (var i = 0; i < defArr.length; i++) {
      if (defArr[i].player === player.player) {
        defArr.splice(i, 1);
      }
    }
    for (var i = 0; i < kckrArr.length; i++) {
      if (kckrArr[i].player === player.player) {
        kckrArr.splice(i, 1);
      }
    }
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

  // Keeselpng the following ...

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

  $scope.cpVal={level: 1};

})
.directive('addOne', function() {
  return {
    link: function(scope, element, attrs) {
      element.on('click', function() {
        scope.$apply(scope.cpVal.level++);
      });
    }
  }
})
.directive('subOne', function() {
  return {
    link: function(scope, element, attrs) {
      element.on('click', function() {
        if(scope.cpVal.level > 1) {
          scope.$apply(scope.cpVal.level--);
        }
      });
    }
  }
})
