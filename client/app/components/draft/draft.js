import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bootstrap from 'angular-ui-bootstrap';
import draftComponent from './draft.component';

let draftModule = angular.module('draft', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('draft', {
      url: '/draft',
      component: 'draft'
    });
})

.component('draft', draftComponent)

.name;

export default draftModule;
