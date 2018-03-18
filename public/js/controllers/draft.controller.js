"use strict";

var config = {
    apiKey: "AIzaSyD13ULJZ8nn0lRDoiooJ-qmtAI9di20-cE",
    authDomain: "benched-sports-dos.firebaseapp.com",
    databaseURL: "https://benched-sports-dos.firebaseio.com",
    projectId: "benched-sports-dos",
    storageBucket: "benched-sports-dos.appspot.com",
    messagingSenderId: "666313054958"
};
firebase.initializeApp(config);

var app = angular.module('FantasyFootball');

app.controller('DraftDayController', function($scope, DraftDayService, RosterService, SortPlayerService, $firebaseObject) {

    var rootRef = firebase.database().ref().child('object');
    var ref = rootRef.child('players');
    $scope.object = $firebaseObject(ref);

    // $scope.viewRoster = rosterData;

console.log('object', $scope.object[0]);

for (var key in $scope.object) {
  if ($scope.object.hasOwnProperty(key)) {
    console.log(key + " -> " + $scope.object[key]);
    // console.log('testing: ', JSON.stringify($scope.object[key]));
    // alert(key + " -> " + JSON.stringify($scope.object[key]));
  }
}



// (function() {
//     for (var i = 0; i < $scope.object; i++) {
//         console.log('object', $scope.object);
//     }
// })();

    $scope.players = DraftDayService;

    // TODO create another array that backs up removed players - shouldn't need with database - will be using objects

    // CLEAN UP ~~ Seriously it's an eye sore ~~
    $scope.backupArr = [];

    // Ideally I won't be dealing with arrays so this approach can be handled with the data

    // Selected Players Array
    $scope.myQBs = [];
    $scope.myRBs = [];
    $scope.myWRs = [];
    $scope.myTEs = [];
    $scope.myFlex = [];
    $scope.myDEFs = [];
    $scope.myKckr = [];

    // Validation of Players
    $scope.validQB = [];
    $scope.validRB = [];
    $scope.validWR = [];
    $scope.validTE = [];
    $scope.validDEF = [];
    $scope.validKckr = [];

    // Purchased Players
    $scope.purchQBs = [];
    $scope.purchRBs = [];
    $scope.purchWRs = [];
    $scope.purchTEs = [];
    $scope.purchFlex = [];
    $scope.purchDEFs = [];
    $scope.purchKckr = [];

    // This is for testing data
    $scope.purchBE = [];
    $scope.altViewBE = [];
    $scope.benchFull = false;

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
        swal({
            imageUrl: "images/no_room.gif",
            imageSize: "450x300",
            title: "No Room on the bench",
            timer: 4000,
            showConfirmButton: false
        })
    }

    $scope.alrtUsr2 = function(position) {
        swal({
            imageUrl: "images/mutombo.gif",
            imageSize: "250x250",
            title: "Too many " + position + ".",
            timer: 2500,
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

    $scope.remainingBalance = 100;
    $scope.amountSpent = 0;
    $scope.outtaMoney = false;

    /*
    $scope.adjBudget = function(price) {
    var rbal = $scope.remainingBalance;
    var as = $scope.amountSpent;
    var mb = $scope.maxBid = 185;
    var initBal = 200;

    // if (rbal === 200) {
    //   $scope.remainingBalance = (initBal -= price);
    //   $scope.amountSpent += price;
    // }
    if ($scope.remainingBalance > 0 && ($scope.remainingBalance - price > 0)) {
    if ($scope.outtaMoney === false) {
    $scope.remainingBalance = rbal - price;
    $scope.amountSpent += price;
    }
    }
    if ($scope.remainingBalance < 0 || $scope.remainingBalance === 0) {
    $scope.outtaMoney = true;
    }
    else {
    $scope.outtaMoney = true;
    }
    console.log("rbal=",$scope.remainingBalance);
    console.log("what I'm looking for=",$scope.remainingBalance - price);
    // Handle if price hit zero
    // Will need to affect chg to addPlayer()
    }
    */

    /*
    $scope.purchQBs = [];
    $scope.purchRBs = [];
    $scope.purchWRs = [];
    $scope.purchTEs = [];
    $scope.purchFlex = [];
    $scope.purchDEFs = [];
    $scope.purchKckr = [];

    $scope.purchBE = [];
    */

    $scope.fullBench = function(position) {
        switch (position) {
            case 'QB':
            // if ($scope.purchBE.length ===  && $scope.purchQBs.length === 1) {
            //   $scope.benchFull = true;
            // }
            break;
            case 'RB':
            // alert('rb');
            break;
            case 'WR':
            // alert('wr');
            break;
            case 'TE':
            // alert('te');
            break;
            case 'DEF':
            // alert('def');
            break;
            case 'K':
            // alert('k');
            break;
            default:

        }
    }

    $scope.purchasedPlayer = function(player) {
        // CLEAN UP

        /*

        Something like
        var qbArr = $scope.myQBs,
        rbArr = $scope.myRBs,
        wrArr = $scope.myWRs,
        ETC ETC

        */
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

        /*
        $scope.adjBudget(player.ap);

        if ($scope.outtaMoney === true) {
        swal({
        title: "You broke, foo!",
        // imageUrl: "images/tickotaco.jpg",
        imageUrl: "images/u_broke.gif",
        imageSize: "400x228"
        })
        }
        */

        $scope.fullBench(player.pos);

        console.log("purch bench size=", $scope.purchBE.length);
        console.log("status of full bench", $scope.benchFull);

        if (player.price > 0 && player.price < 186 && $scope.benchFull === false) {
            /* QB */
            if (player.pos === 'QB' && valQB.length < 3 && bench.length <= 6) {
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
            } else if (player.pos === 'QB' && (valQB.length === 3 || bench.length <= 7)) {
                if (bench.length <= 7) {
                    $scope.alrtUsr();
                } else {
                    $scope.alrtUsr2('quarter backs');
                }
            }
            /* RB */
            if (player.pos === 'RB' && $scope.validRB.length < 4) {
                $scope.validRB.push(player);
                // $scope.adjBudget(player.ap);
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
            } else if (player.pos === 'RB' && valRB.length === 4) {
                $scope.alrtUsr2('running backs');
            }
            /* WR */
            if (player.pos === 'WR' && $scope.validWR.length < 6) {
                $scope.validWR.push(player);
                // $scope.adjBudget(player.ap);
                if (purWR.length < 2) {
                    $scope.purchWRs.push(player);
                }
                if ($scope.validWR.length > 2 && $scope.purchFlex.length < 1) {
                    $scope.purchFlex.push(player);
                } else if ($scope.validWR.length > 2) {
                    $scope.purchBE.push(player);
                }
                for (var i = 0; i < wrArr.length; i++) {
                    if (wrArr[i].player === player.player) {
                        wrArr.splice(i, 1);
                    }
                }
            } else if (player.pos === 'WR' && valWR.length === 6) {
                $scope.alrtUsr2('wide receivers');
            }
            /* TE */
            if (player.pos === 'TE' && $scope.validTE.length < 3) {
                $scope.validTE.push(player);
                // $scope.adjBudget(player.ap);
                if (purTE.length < 1) {
                    $scope.purchTEs.push(player);
                }
                if ($scope.validTE.length > 1 && $scope.purchFlex.length < 1) {
                    $scope.purchFlex.push(player);
                } else if ($scope.validTE.length > 1) {
                    $scope.purchBE.push(player);
                }
                for (var i = 0; i < teArr.length; i++) {
                    if (teArr[i].player === player.player) {
                        teArr.splice(i, 1);
                    }
                }
            } else if (player.pos === 'TE' && valTE.length === 3) {
                $scope.alrtUsr2('tight ends');
            }
            /* D/ST */
            if (player.pos === 'DEF' && valDEF.length < 2) {
                $scope.validDEF.push(player);
                if (purDEF <= 1) {
                    $scope.purchDEFs.push(player);
                } else {
                    $scope.purchBE.push(player);
                }
                for (var i = 0; i < defArr.length; i++) {
                    if (defArr[i].player === player.player) {
                        defArr.splice(i, 1);
                    }
                }
            } else if (player.pos === 'DEF' && valDEF.length === 2) {
                $scope.alrtUsr2('defenses');
            }
            /* K */
            if (player.pos === 'K' && valK.length < 2) {
                $scope.validKckr.push(player);
                if (purKckr <= 1) {
                    $scope.purchKckr.push(player);
                } else {
                    $scope.purchBE.push(player);
                }
                for (var i = 0; i < kckrArr.length; i++) {
                    if (kckrArr[i].player === player.player) {
                        kckrArr.splice(i, 1);
                    }
                }
            } else if (player.pos === 'K' && valK.length === 2) {
                $scope.alrtUsr2('kickers');
            }
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
        acquiredPlayer.avg = selp.avg;
        acquiredPlayer.tier = selp.tier;
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
                // if ($scope.myQBs.length > 1) {
                //   $scope.altViewBE.push(acquiredPlayer)
                // }
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
            if (selp.pos === 'WR' && $scope.myWRs.length === 8) {
                $scope.notifyUsr('wide receivers');
            }
            if (selp.pos === 'WR' && $scope.myWRs.length < 8) {
                $scope.myWRs.push(acquiredPlayer);
                $scope.backupPlyr();
                $scope.rmPlyr();
                // TODO Same as RBs, remove once redesign is done
                /*
                if ($scope.myWRs.length > 2 && flex.length < 1) {
                $scope.myFlex.push(acquiredPlayer);
                } else if ($scope.myWRs.length > 2) {
                $scope.altViewBE.push(acquiredPlayer);
                }
                */
            }
            if (selp.pos === 'TE' && $scope.myTEs.length === 4) {
                $scope.notifyUsr('tight ends');
            }
            if (selp.pos === 'TE' && $scope.myTEs.length < 4) {
                $scope.myTEs.push(acquiredPlayer);
                $scope.backupPlyr();
                $scope.rmPlyr();
                // TODO Same as above
                /*
                if ($scope.myTEs.length > 1 && flex.length < 1) {
                $scope.myFlex.push(acquiredPlayer);
                } else if ($scope.myTEs.length > 1) {
                $scope.altViewBE.push(acquiredPlayer);
                }
                */
            }
            if (selp.pos === 'DEF' && $scope.myDEFs.length === 4) {
                $scope.notifyUsr('defenses');
            }
            if (selp.pos === 'DEF' && $scope.myDEFs.length < 4) {
                $scope.myDEFs.push(acquiredPlayer);
                $scope.backupPlyr();
                $scope.rmPlyr();
                /* TODO REMOVE
                if ($scope.myDEFs.length > 1) {
                $scope.altViewBE.push(acquiredPlayer)
                }
                */
            }
            if (selp.pos === 'K' && $scope.myKckr.length === 2) {
                $scope.notifyUsr('kickers');
            }
            if (selp.pos === 'K' && $scope.myKckr.length < 2) {
                $scope.myKckr.push(acquiredPlayer);
                $scope.backupPlyr();
                $scope.rmPlyr();
                /* TODO REMOVE
                if ($scope.myKckr.length > 1) {
                $scope.altViewBE.push(acquiredPlayer)
                }
                */
                if ($scope.myKckr.length === 2) {
                    swal({
                        title: "Seriously...",
                        text: "Are you Taco or something??",
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
        // TODO SWITCH BACK
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


            // TODO buggy (cannot use more than once)
            // need to fix in backupPlyr
            if (player.pos === 'QB') {
                for (var i = 0; i < qbArr.length; i++) {
                    if (qbArr[i].player === player.player) {
                        qbArr.splice(i, 1);
                    }
                    for (var j = 0; j < buu.length; j++) {
                        if (buu[j].player === player.player) {
                            $scope.players.push(buu[j]);
                        }
                    }
                }
            }
            if (player.pos === 'RB') {
                for (var i = 0; i < rbArr.length; i++) {
                    if (rbArr[i].player === player.player) {
                        rbArr.splice(i, 1);
                    }
                    for (var j = 0; j < buu.length; j++) {
                        if (buu[j].player === player.player) {
                            $scope.players.push(buu[j]);
                        }
                    }
                }
            }
            if (player.pos === 'WR') {
                for (var i = 0; i < wrArr.length; i++) {
                    if (wrArr[i].player === player.player) {
                        wrArr.splice(i, 1);
                    }
                    for (var j = 0; j < buu.length; j++) {
                        if (buu[j].player === player.player) {
                            $scope.players.push(buu[j]);
                        }
                    }
                }
            }
            if (player.pos === 'TE') {
                for (var i = 0; i < teArr.length; i++) {
                    if (teArr[i].player === player.player) {
                        teArr.splice(i, 1);
                    }
                    for (var j = 0; j < buu.length; j++) {
                        if (buu[j].player === player.player) {
                            $scope.players.push(buu[j]);
                        }
                    }
                }
            }
            if (player.pos === 'DEF') {
                for (var i = 0; i < defArr.length; i++) {
                    if (defArr[i].player === player.player) {
                        defArr.splice(i, 1);
                    }
                    for (var j = 0; j < buu.length; j++) {
                        if (buu[j].player === player.player) {
                            $scope.players.push(buu[j]);
                        }
                    }
                }
            }
            if (player.pos === 'K') {
                for (var i = 0; i < kckrArr.length; i++) {
                    if (kckrArr[i].player === player.player) {
                        kckrArr.splice(i, 1);
                    }
                    for (var j = 0; j < buu.length; j++) {
                        if (buu[j].player === player.player) {
                            $scope.players.push(buu[j]);
                        }
                    }
                }
            }
        }

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

        // Sortable Chart Modal
        $scope.items = SortPlayerService.playersArr;
        $scope.qbs = SortPlayerService.qbsArr;
        $scope.rbs = SortPlayerService.rbsArr;
        $scope.wrs = SortPlayerService.wrsArr;
        $scope.tes = SortPlayerService.tesArr;
        $scope.defs = SortPlayerService.defsArr;
        $scope.ks = SortPlayerService.ksArr;

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
    swal({
    imageUrl: "images/no_room.gif",
    imageSize: "450x300",
    title: "No Room on the bench",
    timer: 3000,
    showConfirmButton: false
    })
    swal({
    imageUrl: "images/no_room2.gif",
    imageSize: "450x300",
    title: "No Room on the bench",
    timer: 8000,
    showConfirmButton: false
    })

    */
