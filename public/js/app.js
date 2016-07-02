"use strict";
var app = angular.module('FantasyFootball', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/home.html'
    })
    .when('/draft-day', {
      templateUrl: './views/draftDay.html',
      controller: 'DraftDayController'
    })
    .otherwise({
      redirectTo: '/'
    });
})
