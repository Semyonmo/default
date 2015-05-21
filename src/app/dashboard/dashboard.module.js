import 'angular';

import core from 'app/core/core.module.js';

import controller  from './dashboard.controller.js';
import directive from './dashboard.directive.js';

export default angular.module('app.dashboard',[
    core.name,
    //Module
    controller.name, directive.name
]);