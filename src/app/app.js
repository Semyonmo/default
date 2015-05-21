import "angular";

import core from './core/core.module.js';
import shell from './shell/shell.module.js';
import dashboard from './dashboard/dashboard.module.js';

//import components
import 'framework';
import 'dashboard';
import 'menu';

///* @ngInject */
angular.module('app', [
    //Modules
    core.name,

    //Features
    shell.name, dashboard.name,

    //Components
    'framework',
    'dashboard',
    'menu'
]);


