module.exports =
    angular
        .module('app.routes', [])
        .config(appRoutes);

function appRoutes($routeProvider) {
    "use strict";

    $routeProvider
        .when('/', {
            controller: 'WorksController',
            controllerAs: 'vm'
        })
        .when('/work', {
            templateUrl: 'work.html',
            controller: 'WorksController',
            controllerAs: 'vm'
        }).otherwise({
            redirectTo: '/'
        });

}
