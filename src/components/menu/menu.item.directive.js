export default angular.module('menu.item.directive', [])
    .directive('menuItem', menuItem);

/* @ngInject */
function menuItem() {
    "use strict";

    return {
        transclude: true,
        restrict: 'EA',
        scope: {
            label: '@',
            route: '@',
            active: '@'
        },
        link: link,
        require: '^menu',
        templateUrl: 'menu/menu_item.html',
        bindToController: true // because the scope is isolated
    };

    function link(scope, el, attr, ctrl) {
        scope.isActive = function () {
            return el === ctrl.getActiveElement();
        };

        if (scope.active === 'true') {
            ctrl.setActiveItem(el);
            ctrl.setRoute(scope.route);
        }

        el.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            scope.$apply(function () {
                ctrl.setActiveItem(el);
                ctrl.setRoute(scope.route);
            });
        });
    }
}
