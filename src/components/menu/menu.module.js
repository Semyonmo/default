import 'angular';

import directive from './menu.directive.js';
import controller from './menu.controller.js';

import itemDirective from './menu.item.directive.js'

import '../templates/templates.js';

angular.module('menu', [
    directive.name, controller.name,

    itemDirective.name,

    'templates'
]);