import 'angular';

import core from 'app/core/core.module.js';

import config from './shell.config.js';
import route from './shell.route.js';
import controller from './shell.controller.js';
import directive from './shell.directive.js';

export default angular.module('app.shell',[
    core.name,
    //Module
    config.name, route.name, controller.name, directive.name
]);