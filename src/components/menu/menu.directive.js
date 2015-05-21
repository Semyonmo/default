export default angular.module('menu.directive', [])
    .directive('menu', menu);

/* @ngInject */
function menu() {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        scope: {

        },
        link: link,
        controller: 'Menu',
        controllerAs: 'vm',
        templateUrl: 'menu/menu.html',
        bindToController: true // because the scope is isolated
    };

    function link(scope, el, attr, ctrl) {

    }
}