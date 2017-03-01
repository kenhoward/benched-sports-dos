import angular from 'angular';
import Home from './home/home';
import Draft from './draft/draft';
import Research from './research/research'

let componentModule = angular.module('app.components', [
  Home,
  Research,
  Draft
])

.name;

export default componentModule;
