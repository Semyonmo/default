if (!$) {
    throw new Error('jQuery not load');
}

if (!angular) {
    throw new Error('AngularJS not load');
}

/**
 * Load angular modules
 * @type {exports}
 */
var works = require('./modules/works');

/**
 * Load angular app config modules
 * @type {exports}
 */
var appRoutes =  require('./app.routes'),
    appConfig =  require('./app.config');

/**
 * Load menu
 * @type {function(): Menu|exports}
 */
var menu = require('./modules/menu');


/**
 * Init AgngulrJS App
 */
angular
    .module('app', [
        //'firebase',
        'ngRoute',
        works.name,
        appConfig.name,
        appRoutes.name
    ]);

//imported from ./modules/menu
//init menu
menu('nav.menu');