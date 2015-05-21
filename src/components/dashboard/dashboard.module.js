import 'angular';
import 'angular-gridster';

import directive from './dashboard.directive.js';
import controller from './dashboard.controller.js';

import '../templates/templates.js';

angular.module('dashboard', [
    controller.name, directive.name,
    'gridster',
    'templates'
]);