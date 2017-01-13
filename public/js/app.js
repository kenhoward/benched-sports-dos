"use strict";
var app = angular.module('FantasyFootball', ['ngRoute', 'ui.bootstrap']); //, 'ngAnimate'

app.config(function($routeProvider) {
  $routeProvider
    // .when('/', {
    //   templateUrl: './views/home.html',
    //   controller: 'HomeController'
    // })
    .when('/draft-day', {
      templateUrl: './views/draftDay.html',
      controller: 'DraftDayController'
    })
    .otherwise({
      redirectTo: '/draft-day'
    });
})
