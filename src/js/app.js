if (!$) {
    throw new Error('jQuery not load');
}

if (!angular) {
    throw new Error('AngularJS not load');
}


var works = require('./modules/works'),
    menu = require('./modules/menu');


angular.module('app', [
    'firebase',
    works.name
]);


//imported from ./modules/menu
//init menu
menu('nav.menu');