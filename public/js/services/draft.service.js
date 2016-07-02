"use strict";

var app = angular.module('FantasyFootball');

app.service('DraftDayService', function($http) {
	 return [
  {"ID":1,"player":"Cam Newton","team":"CAR","plays":628,"FPTS":455,"GP":16,"FPTSPG":28.47,"RUN":132,"RYD":636,"RTD":10,"PASS":496,"CMP":296,"PYDS":3837,"PTD":35,"FUM":4,"INT":10},
  {"ID":2,"player":"Tom Brady","team":"NE","plays":659,"FPTS":406,"GP":16,"FPTSPG":25.36,"RUN":34,"RYD":53,"RTD":3,"PASS":624,"CMP":402,"PYDS":4770,"PTD":36,"FUM":2,"INT":7},
  {"ID":3,"player":"Blake Bortles","team":"JAC","plays":658,"FPTS":404,"GP":16,"FPTSPG":25.27,"RUN":52,"RYD":310,"RTD":2,"PASS":606,"CMP":355,"PYDS":4428,"PTD":35,"FUM":5,"INT":18},
  {"ID":4,"player":"Russell Wilson","team":"SEA","plays":586,"FPTS":398,"GP":16,"FPTSPG":24.91,"RUN":103,"RYD":553,"RTD":1,"PASS":483,"CMP":329,"PYDS":4024,"PTD":34,"FUM":3,"INT":8},
  {"ID":5,"player":"Carson Palmer","team":"ARI","plays":562,"FPTS":382,"GP":16,"FPTSPG":23.87,"RUN":25,"RYD":24,"RTD":1,"PASS":537,"CMP":342,"PYDS":4671,"PTD":35,"FUM":2,"INT":11},
  {"ID":6,"player":"Drew Brees","team":"NO","plays":651,"FPTS":379,"GP":15,"FPTSPG":25.26,"RUN":24,"RYD":14,"RTD":1,"PASS":627,"CMP":428,"PYDS":4870,"PTD":32,"FUM":2,"INT":11},
  {"ID":7,"player":"Eli Manning","team":"NYG","plays":638,"FPTS":368,"GP":16,"FPTSPG":22.99,"RUN":20,"RYD":61,"RTD":0,"PASS":618,"CMP":387,"PYDS":4436,"PTD":35,"FUM":4,"INT":14},
  {"ID":8,"player":"Matthew Stafford","team":"DET","plays":637,"FPTS":363,"GP":16,"FPTSPG":22.69,"RUN":44,"RYD":159,"RTD":1,"PASS":592,"CMP":398,"PYDS":4262,"PTD":32,"FUM":2,"INT":13},
  {"ID":9,"player":"Kirk Cousins","team":"WAS","plays":569,"FPTS":359,"GP":16,"FPTSPG":22.44,"RUN":26,"RYD":48,"RTD":5,"PASS":543,"CMP":379,"PYDS":4166,"PTD":29,"FUM":3,"INT":11},
  {"ID":10,"player":"Philip Rivers","team":"SD","plays":678,"FPTS":358,"GP":16,"FPTSPG":22.4,"RUN":17,"RYD":28,"RTD":0,"PASS":661,"CMP":437,"PYDS":4792,"PTD":29,"FUM":2,"INT":13},
  {"ID":11,"player":"Ryan Fitzpatrick","team":"NYJ","plays":622,"FPTS":358,"GP":16,"FPTSPG":22.39,"RUN":60,"RYD":270,"RTD":2,"PASS":562,"CMP":335,"PYDS":3905,"PTD":31,"FUM":2,"INT":15},
  {"ID":12,"player":"Aaron Rodgers","team":"GB","plays":630,"FPTS":355,"GP":16,"FPTSPG":22.22,"RUN":58,"RYD":344,"RTD":1,"PASS":572,"CMP":347,"PYDS":3821,"PTD":31,"FUM":4,"INT":8},
  {"ID":13,"player":"Jameis Winston","team":"TB","plays":588,"FPTS":347,"GP":16,"FPTSPG":21.69,"RUN":53,"RYD":210,"RTD":6,"PASS":535,"CMP":312,"PYDS":4042,"PTD":22,"FUM":2,"INT":15},
  {"ID":14,"player":"Derek Carr","team":"OAK","plays":606,"FPTS":341,"GP":16,"FPTSPG":21.32,"RUN":33,"RYD":138,"RTD":0,"PASS":573,"CMP":350,"PYDS":3987,"PTD":32,"FUM":3,"INT":13},
  {"ID":15,"player":"Ryan Tannehill","team":"MIA","plays":619,"FPTS":326,"GP":16,"FPTSPG":20.41,"RUN":32,"RYD":141,"RTD":1,"PASS":586,"CMP":363,"PYDS":4208,"PTD":24,"FUM":3,"INT":12},
  {"ID":16,"player":"Matt Ryan","team":"ATL","plays":651,"FPTS":320,"GP":16,"FPTSPG":19.99,"RUN":37,"RYD":63,"RTD":0,"PASS":614,"CMP":407,"PYDS":4591,"PTD":21,"FUM":5,"INT":16},
  {"ID":17,"player":"Alex Smith","team":"KC","plays":554,"FPTS":316,"GP":16,"FPTSPG":19.76,"RUN":84,"RYD":498,"RTD":2,"PASS":470,"CMP":307,"PYDS":3486,"PTD":20,"FUM":0,"INT":7},
  {"ID":18,"player":"Tyrod Taylor","team":"BUF","plays":485,"FPTS":313,"GP":14,"FPTSPG":22.32,"RUN":104,"RYD":568,"RTD":4,"PASS":380,"CMP":242,"PYDS":3035,"PTD":20,"FUM":1,"INT":6},
  {"ID":19,"player":"Andy Dalton","team":"CIN","plays":443,"FPTS":295,"GP":13,"FPTSPG":22.67,"RUN":57,"RYD":142,"RTD":3,"PASS":386,"CMP":255,"PYDS":3250,"PTD":25,"FUM":2,"INT":7},
  {"ID":20,"player":"Jay Cutler","team":"CHI","plays":521,"FPTS":293,"GP":15,"FPTSPG":19.54,"RUN":38,"RYD":201,"RTD":1,"PASS":483,"CMP":311,"PYDS":3659,"PTD":21,"FUM":5,"INT":11},
  {"ID":21,"player":"Ben Roethlisberger","team":"PIT","plays":484,"FPTS":284,"GP":12,"FPTSPG":23.65,"RUN":15,"RYD":29,"RTD":0,"PASS":469,"CMP":319,"PYDS":3938,"PTD":21,"FUM":0,"INT":16},
  {"ID":22,"player":"Sam Bradford","team":"PHI","plays":558,"FPTS":266,"GP":14,"FPTSPG":19.01,"RUN":26,"RYD":39,"RTD":0,"PASS":532,"CMP":346,"PYDS":3725,"PTD":19,"FUM":3,"INT":14},
  {"ID":23,"player":"Teddy Bridgewater","team":"MIN","plays":491,"FPTS":255,"GP":16,"FPTSPG":15.92,"RUN":44,"RYD":192,"RTD":3,"PASS":447,"CMP":292,"PYDS":3231,"PTD":14,"FUM":3,"INT":9},
  {"ID":24,"player":"Marcus Mariota","team":"TEN","plays":405,"FPTS":254,"GP":12,"FPTSPG":21.18,"RUN":34,"RYD":252,"RTD":2,"PASS":370,"CMP":230,"PYDS":2818,"PTD":19,"FUM":6,"INT":10},
  {"ID":25,"player":"Joe Flacco","team":"BAL","plays":426,"FPTS":216,"GP":10,"FPTSPG":21.59,"RUN":13,"RYD":23,"RTD":3,"PASS":413,"CMP":266,"PYDS":2791,"PTD":14,"FUM":2,"INT":12},
  {"ID":26,"player":"Brian Hoyer","team":"HOU","plays":384,"FPTS":211,"GP":11,"FPTSPG":19.15,"RUN":15,"RYD":44,"RTD":0,"PASS":369,"CMP":224,"PYDS":2606,"PTD":19,"FUM":2,"INT":7},
  {"ID":27,"player":"Andrew Luck","team":"IND","plays":326,"FPTS":174,"GP":7,"FPTSPG":24.81,"RUN":33,"RYD":196,"RTD":0,"PASS":293,"CMP":162,"PYDS":1881,"PTD":15,"FUM":1,"INT":12},
  {"ID":28,"player":"Josh McCown","team":"CLE","plays":312,"FPTS":169,"GP":8,"FPTSPG":21.16,"RUN":20,"RYD":98,"RTD":1,"PASS":292,"CMP":186,"PYDS":2109,"PTD":12,"FUM":6,"INT":4},
  {"ID":29,"player":"Blaine Gabbert","team":"SF","plays":314,"FPTS":166,"GP":8,"FPTSPG":20.76,"RUN":32,"RYD":185,"RTD":1,"PASS":282,"CMP":178,"PYDS":2031,"PTD":10,"FUM":1,"INT":7},
  {"ID":30,"player":"Brock Osweiler","team":"DEN","plays":296,"FPTS":150,"GP":9,"FPTSPG":16.72,"RUN":21,"RYD":61,"RTD":1,"PASS":275,"CMP":170,"PYDS":1967,"PTD":10,"FUM":1,"INT":6},
  {"ID":31,"player":"Peyton Manning","team":"DEN","plays":337,"FPTS":148,"GP":10,"FPTSPG":14.79,"RUN":6,"RYD":-6,"RTD":0,"PASS":331,"CMP":198,"PYDS":2249,"PTD":9,"FUM":0,"INT":17},
  {"ID":32,"player":"Nick Foles","team":"LA","plays":354,"FPTS":139,"GP":11,"FPTSPG":12.6,"RUN":17,"RYD":20,"RTD":1,"PASS":337,"CMP":190,"PYDS":2052,"PTD":7,"FUM":2,"INT":10},
  {"ID":33,"player":"Colin Kaepernick","team":"SF","plays":289,"FPTS":136,"GP":9,"FPTSPG":15.15,"RUN":45,"RYD":256,"RTD":1,"PASS":244,"CMP":144,"PYDS":1615,"PTD":6,"FUM":1,"INT":5}];
})
