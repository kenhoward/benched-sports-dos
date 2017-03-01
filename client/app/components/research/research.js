import angular from 'angular';
import uiRouter from 'angular-ui-router';
import researchComponent from './research.component';

let researchModule = angular.module('research', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('research', {
      url: '/research',
      component: 'research'
    });
})

.component('research', researchComponent)

.name;

export default researchModule;
