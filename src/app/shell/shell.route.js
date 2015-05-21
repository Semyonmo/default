export default angular.module('app.shell.route', [])
    .config(config)

/* @ngInject */
function config($routeProvider) {
    "use strict";

    $routeProvider
        .when('/dashboard', {
            template: `<app-dashboard></app-dashboard>`,
            controller: 'Shell',
            controllerAs: 'vm'
        }).when('/location', {
            template: `<h1>Location</h1>`,
            controller: 'Shell',
            controllerAs: 'vm'
        }).when('/guides', {
            template: `<h1>Guides</h1>`,
            controller: 'Shell',
            controllerAs: 'vm'
        });

    $routeProvider.otherwise({redirectTo: '/dashboard'});
}