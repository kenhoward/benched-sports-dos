"use strict";

var app = angular.module('FantasyFootball');

app.service('SortPlayerService', function($http) {

  this.qbsArr = [
    {"pos":"QB","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"QB","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"QB","player":"adfa Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"QB","player":"hsety Howard","ryd":"ryd","ypr":"ypr"},{"pos":"QB","player":"artjs Howard","ryd":"ryd","ypr":"ypr"},{"pos":"QB","player":"fyifyju Howard","ryd":"ryd","ypr":"ypr"}
  ]
  this.rbsArr = [
    {"pos":"RB","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"RB","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"RB","player":"adfa Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"RB","player":"hsety Howard","ryd":"ryd","ypr":"ypr"},{"pos":"RB","player":"artjs Howard","ryd":"ryd","ypr":"ypr"},{"pos":"RB","player":"fyifyju Howard","ryd":"ryd","ypr":"ypr"}
  ]

  this.wrsArr = [
    {"pos":"WRs","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"WRs","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"WRs","player":"adfa Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"WRs","player":"hsety Howard","ryd":"ryd","ypr":"ypr"},{"pos":"WRs","player":"artjs Howard","ryd":"ryd","ypr":"ypr"},{"pos":"WRs","player":"fyifyju Howard","ryd":"ryd","ypr":"ypr"}
  ]

  this.tesArr = [
    {"pos":"TEs","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"TEs","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"TEs","player":"adfa Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"TEs","player":"hsety Howard","ryd":"ryd","ypr":"ypr"},{"pos":"TEs","player":"artjs Howard","ryd":"ryd","ypr":"ypr"},{"pos":"TEs","player":"fyifyju Howard","ryd":"ryd","ypr":"ypr"}
  ]

  this.defsArr = [
    {"pos":"DEF","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"DEF","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"DEF","player":"adfa Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"DEF","player":"hsety Howard","ryd":"ryd","ypr":"ypr"},{"pos":"DEF","player":"artjs Howard","ryd":"ryd","ypr":"ypr"},{"pos":"DEF","player":"fyifyju Howard","ryd":"ryd","ypr":"ypr"}
  ]
  this.ksArr = [
    {"pos":"K","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"K","player":"Kenny Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"K","player":"adfa Howard","ryd":"aasdryd","ypr":"ypr"},{"pos":"K","player":"hsety Howard","ryd":"ryd","ypr":"ypr"},{"pos":"K","player":"artjs Howard","ryd":"ryd","ypr":"ypr"},{"pos":"K","player":"fyifyju Howard","ryd":"ryd","ypr":"ypr"}
  ]

	});
