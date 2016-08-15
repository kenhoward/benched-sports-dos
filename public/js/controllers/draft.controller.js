"use strict";

var app = angular.module('FantasyFootball');

app.controller('DraftDayController', function($scope, DraftDayService, RosterService) {

  // $scope.viewRoster = rosterData;

  $scope.players = DraftDayService;

  // TODO create another array that backs up removed players
  $scope.backupArr = [];

  $scope.myQBs = [];
  $scope.myRBs = [];
  $scope.myWRs = [];
  $scope.myTEs = [];
  $scope.myFlex = [];
  $scope.myDEFs = [];
  $scope.myKckr = [];

  $scope.validQB = [];
  $scope.validRB = [];
  $scope.validWR = [];
  $scope.validTE = [];
  $scope.validDEF = [];
  $scope.validKckr = [];

  $scope.purchQBs = [];
  $scope.purchRBs = [];
  $scope.purchWRs = [];
  $scope.purchTEs = [];
  $scope.purchFlex = [];
  $scope.purchDEFs = [];
  $scope.purchKckr = [];

  $scope.purchBE = [];
  $scope.altViewBE = [];

  $scope.rmPlyr = function() {
    var all = $scope.players
    var selp = $scope.selectedPlayer;
    for (var i = 0; i < all.length; i++) {
      if(all[i].player === selp.player) {
        all.splice(i, 1);
      }
    }
  }

  $scope.backupPlyr = function() {
    var selp = $scope.selectedPlayer;
    var buu = $scope.backupArr;
    buu.push(selp);
  }

  $scope.alrtUsr = function(position) {
    swal("Hey now...", "You can't have any more " + position + "!!", "error");
  }

  $scope.alrtUsr2 = function(position) {
    swal({
      imageUrl: "images/mutombo.gif",
      imageSize: "250x250",
      title: "Too many " + position + ".",
      timer: 1250,
      showConfirmButton: false
    })
  }

  $scope.notifyUsr = function(position) {
    swal("Max players reached", "You cannot save any more " + position + ".", "error");
  }

  $scope.checkRoster = function() {
    var bench = $scope.altViewBE;
    if (bench.length === 7) {
      swal({
        title: "You did it!",
        text: "Your roster is set, Good Luck!",
        imageUrl: "images/watt.gif",
        imageSize: "400x250",
        timer: 10000,
        showConfirmButton: false
      });
      $scope.rosterComplete = true;
    }
  }

  $scope.remainingBalance = 200;
  $scope.amountSpent = 0;

  $scope.adjBudget = function(price) {
    var rbal = $scope.remainingBalance;
    var as = $scope.amountSpent;
    var initBal = 200;

    if (rbal == 200) {
      $scope.remainingBalance = (initBal -= price);
      $scope.amountSpent += price;
    } else {
      $scope.remainingBalance = rbal - price;
      $scope.amountSpent += price;
    }
    // Handle if price hit zero
    // Will need to affect chg to addPlayer()
  }

  $scope.purchasedPlayer = function(player) {
    var qbArr = $scope.myQBs;
    var rbArr = $scope.myRBs;
    var wrArr = $scope.myWRs;
    var teArr = $scope.myTEs;
    var defArr = $scope.myDEFs;
    var kckrArr = $scope.myKckr;
    var valQB = $scope.validQB;
    var valRB = $scope.validRB;
    var valWR = $scope.validWR;
    var valTE = $scope.validTE;
    var valDEF = $scope.validDEF;
    var valK = $scope.validKckr;
    var purQB = $scope.purchQBs;
    var purRB = $scope.purchRBs;
    var purWR = $scope.purchWRs;
    var purTE = $scope.purchTEs;
    var purDEF = $scope.purchDEFs;
    var purKckr = $scope.purchKckr;
    var buu = $scope.backupArr;
    var all = $scope.players;
    var purch = $scope.purchPlayer;
    var bench = $scope.purchBE;
    var flex = $scope.purchFlex;

console.log(player);
    if (player.price > 0 && player.price < 186) {
      if (player.pos === 'QB' && $scope.validQB.length < 3) {
        $scope.validQB.push(player);
        if (purQB <= 1) {
          $scope.purchQBs.push(player);
        } else {
          $scope.purchBE.push(player);
        }
        for (var i = 0; i < qbArr.length; i++) {
          if (qbArr[i].player === player.player) {
            qbArr.splice(i, 1);
          }
        }
        if (valQB.length === 4) {
          $scope.alrtUsr2('quarter backs');
        }
      }
    /* RB */
      if (player.pos === 'RB' && $scope.validRB.length < 4) {
        $scope.validRB.push(player)
        if (purRB.length < 1) {
          $scope.purchRBs.push(player);
        }
        if ($scope.validRB.length > 1 && $scope.purchFlex.length < 1) {
          $scope.purchFlex.push(player);
        } else if ($scope.validRB.length > 1) {
            $scope.purchBE.push(player);
        }
        for (var i = 0; i < rbArr.length; i++) {
          if (rbArr[i].player === player.player) {
            rbArr.splice(i, 1);
          }
        }
        if (valRB === 3) {
          $scope.alrtUsr2('running backs');
        }
      }
/*
      for (var i = 0; i < buu.length; i++) {
        if (buu[i].player === player.player) {

        if (buu[i].pos === 'QB' && $scope.validQB.length < 3) {
          $scope.validQB.push(player);
          if (purQB <= 1) {
            $scope.purchQBs.push(player);
          } else {
            $scope.purchBE.push(player);
          }
          for (var i = 0; i < qbArr.length; i++) {
            if (qbArr[i].player === player.player) {
              qbArr.splice(i, 1);
            }
          }
          if (valQB.length === 4) {
            $scope.alrtUsr2('quarter backs');
          }
        }

        if (buu[i].pos === 'RB' && $scope.validRB.length < 4) {
          $scope.validRB.push(player)
          if (purRB.length < 1) {
            $scope.purchRBs.push(player);
          }
          if ($scope.validRB.length > 1 && $scope.purchFlex.length < 1) {
            $scope.purchFlex.push(player);
          } else if ($scope.validRB.length > 1) {
              $scope.purchBE.push(player);
          }
          for (var i = 0; i < rbArr.length; i++) {
            if (rbArr[i].player === player.player) {
              rbArr.splice(i, 1);
            }
          }
          if (valRB === 3) {
            $scope.alrtUsr2('running backs');
          }
        }

        } // player.player
      } // loop
*/

    } // price validation
  }

  $scope.addPlayer = function() {
    var all = $scope.players
    var selp = $scope.selectedPlayer;
    var flex = $scope.myFlex;
    var acquiredPlayer = {};

    // This will be pushed to roster
    acquiredPlayer.player = selp.player;
    acquiredPlayer.price = $scope.cpVal.level;
    acquiredPlayer.bye = selp.bye;
    acquiredPlayer.ap = selp.avgprc;
    acquiredPlayer.scr = selp.score;
    acquiredPlayer.pos = selp.pos;

    // TODO Move plyrAcquired()
    // $scope.adjBudget(acquiredPlayer.price);

    if (acquiredPlayer.price > 0 && acquiredPlayer.price < 186) {
      if (selp.pos === 'QB' && $scope.myQBs.length === 4) {
        $scope.notifyUsr('quarter backs');
      }
      if (selp.pos === 'QB' && $scope.myQBs.length < 4) {
        $scope.myQBs.push(acquiredPlayer);
        // TODO See if it's possible to utilize this
        $scope.backupPlyr();
        $scope.rmPlyr();
        if ($scope.myQBs.length > 1) {
          $scope.altViewBE.push(acquiredPlayer)
        }
      }
      if (selp.pos === 'RB' && $scope.myRBs.length === 8) {
        $scope.notifyUsr('running backs');
      }
      if (selp.pos === 'RB' && $scope.myRBs.length < 8) {
        $scope.myRBs.push(acquiredPlayer);
        $scope.backupPlyr();
        $scope.rmPlyr();
        // TODO Will need to remove once redesign is done
        /*
        if ($scope.myRBs.length > 1 && flex.length < 1) {
          $scope.myFlex.push(acquiredPlayer);
        } else if ($scope.myRBs.length > 1) {
          $scope.altViewBE.push(acquiredPlayer);
        }
        */
      }
      if (selp.pos === 'WR' && $scope.myWRs.length === 6) {
        $scope.notifyUsr('wide receivers');
      }
      if (selp.pos === 'WR' && $scope.myWRs.length < 6) {
        $scope.myWRs.push(acquiredPlayer);
        $scope.rmPlyr();
        if ($scope.myWRs.length > 2 && flex.length < 1) {
          $scope.myFlex.push(acquiredPlayer);
        } else if ($scope.myWRs.length > 2) {
          $scope.altViewBE.push(acquiredPlayer);
        }
      }
      if (selp.pos === 'TE' && $scope.myTEs.length === 3) {
        $scope.notifyUsr('tight ends');
      }
      if (selp.pos === 'TE' && $scope.myTEs.length < 3) {
        $scope.myTEs.push(acquiredPlayer);
        $scope.rmPlyr();
        if ($scope.myTEs.length > 1 && flex.length < 1) {
          $scope.myFlex.push(acquiredPlayer);
        } else if ($scope.myTEs.length > 1) {
          $scope.altViewBE.push(acquiredPlayer);
        }
      }
      if (selp.pos === 'DEF' && $scope.myDEFs.length === 2) {
        $scope.notifyUsr('defenses');
      }
      if (selp.pos === 'DEF' && $scope.myDEFs.length < 2) {
        $scope.myDEFs.push(acquiredPlayer);
        $scope.rmPlyr();
        if ($scope.myDEFs.length > 1) {
          $scope.altViewBE.push(acquiredPlayer)
        }
      }
      if (selp.pos === 'K' && $scope.myKckr.length === 2) {
        $scope.notifyUsr('kickers');
      }
      if (selp.pos === 'K' && $scope.myKckr.length < 2) {
        $scope.myKckr.push(acquiredPlayer);
        $scope.rmPlyr();
        if ($scope.myKckr.length > 1) {
          $scope.altViewBE.push(acquiredPlayer)
        }
        if ($scope.myKckr.length === 2) {
          swal({
            title: "Seriously...",
            text: "Are you Taco or something??",
            // imageUrl: "images/tickotaco.jpg",
            imageUrl: "images/taco.gif",
            imageSize: "400x228"
          })
        }
      }
    $scope.selectedPlayer = '';
    $scope.cpVal.level = $scope.cpVal={level: 1};
    $scope.checkRoster();
  }
  if (acquiredPlayer.price < 1) {
    swal("Error...", "Price needs to be greater than $1", "error");
    $scope.cpVal.level = $scope.cpVal={level: 1};
  }
  if (acquiredPlayer.price > 185) {
    swal("Error...", "Exceeds maximum bid", "error");
    $scope.cpVal.level = $scope.cpVal={level: 1};
  }

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

  // Roster views
  $scope.preDrftPlayerDetails = true;
  $scope.draftRoster = false;
  $scope.defaultView = function () {
    $scope.preDrftPlayerDetails = true;
    $scope.draftRoster = false;
  }
  $scope.alternateView = function() {
    $scope.preDrftPlayerDetails = false;
    $scope.draftRoster = true;
  }

  $scope.readyToDraft = function() {
    swal({
      title: "Are you ready to draft?",
      text: "You can return to this view after proceeding",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5cb85c",
      confirmButtonText: "Let's do this!",
      cancelButtonText: "Not yet!",
      closeOnConfirm: true,
      closeOnCancel: true
    },function(isConfirm) {
      if (isConfirm) {
        $scope.preDrftPlayerDetails = false;
        $scope.draftRoster = true;
        $scope.$apply();
      } else {
        console.log("cancelled")
      }
    });
  }

  $scope.oopsBtn = function(player) {
    var qbArr = $scope.myQBs;
    var rbArr = $scope.myRBs;
    var wrArr = $scope.myWRs;
    var teArr = $scope.myTEs;
    var defArr = $scope.myDEFs;
    var kckrArr = $scope.myKckr;
    var buu = $scope.backupArr;
    var all = $scope.players;
    // console.log('player: ', player);
    for (var i = 0; i < qbArr.length; i++) {
      if (qbArr[i].player === player.player) {
        qbArr.splice(i, 1);
      }
      // TODO buggy, Fix either here or up in backupPlyr
      for (var j = 0; j < buu.length; j++) {
        if (buu[j].player === player.player) {
          all.push(buu[j]);
        }
      //   // Previous v1
      //   // if (buu[i].player === player.player) {
      //   //   all.push(buu[i]);
      //   // }
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

  /*
  // BACKUP code for oopsBtn
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

  */

  // scoring prototype
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

  $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };

  $scope.placement = {
    options: [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom'
    ],
    selected: 'top'
  };

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


/*

swal({
  title: "Awesome!",
  text: "Draft Complete, Good Luck!",
  imageUrl: "images/brady.gif",
  imageSize: "400x225"
});
swal({
  title: "Awesome!",
  text: "Draft Complete, Good Luck!",
  imageUrl: "images/watt.gif",
  imageSize: "400x250"
});
swal({
  title: "Awesome!",
  text: "Draft Complete, Good Luck!",
  imageUrl: "images/luck.gif",
  imageSize: "445x280"
});
swal({
  title: "Awesome!",
  text: "Draft Complete, Good Luck!",
  imageUrl: "images/luck.gif",
  imageSize: "445x280"
});

*/
