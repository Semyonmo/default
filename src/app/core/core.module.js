import 'angular';
import 'angular-route';
import 'angular-resource';

import templates from '../templates/templates.module.js';
import block from '../blocks/blocks.module.js';

import config from  './core.config.js';
import constants from  './core.constants.js';

export default angular.module('app.core', [
    //Angular
    'ngRoute', 'ngResource',

    //Cross
    templates.name, block.name,

    //Module
    config.name, constants.name
]);

