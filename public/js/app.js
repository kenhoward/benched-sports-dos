"use strict";
var app = angular.module('FantasyFootball', ['ngRoute', 'ui.bootstrap', 'firebase']); //, 'ngAnimate'

app.config(function($routeProvider) {
    $routeProvider
    .when('/draft-day', { // ~~~~TEMPORARY~~~~
        templateUrl: './views/home.html',
        controller: 'HomeController'
    })
    .when('/draft-day', {
        templateUrl: './views/draftDay.html',
        controller: 'DraftDayController'
    })
    .when('/research', {
        templateUrl: './views/research.html'
    })
    .otherwise({
        redirectTo: '/draft-day'
    });
})
